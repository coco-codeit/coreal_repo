import "@testing-library/jest-dom/vitest";
import * as React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { beforeEach, describe, expect, test, vi } from "vitest";
import axios, { AxiosResponse } from "axios";

// 서버 응답 타입 정의
interface LoginResponse {
  success: boolean;
  error?: string;
  token?: string;
  message?: string;
}

vi.mock("axios");

describe("LoginForm", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    window.localStorage.removeItem("token");
  });

  const renderLoginForm = () => render(<LoginForm title="로그인" />);

  const fillLoginForm = (email = "admin@naver.com", password = "01234567") => {
    fireEvent.change(screen.getByLabelText("아이디"), {
      target: { value: email },
    });

    fireEvent.change(screen.getByLabelText("비밀번호"), {
      target: { value: password },
    });
  };

  const clickLoginButton = () => fireEvent.click(screen.getByText("로그인"));

  test("renders LoginForm", () => {
    renderLoginForm();
    expect(screen.getByText("로그인")).toBeInTheDocument();
  });

  describe("API key 테스트", () => {
    test("API key가 없는 경우, axios 요청이 실패합니다.", async () => {
      vi.mocked(axios.post).mockRejectedValue(new Error("No API key"));

      renderLoginForm();
      fillLoginForm();
      clickLoginButton();

      await waitFor(() => {
        expect(axios.post).not.toHaveBeenCalled();
      });
    });

    test("API key가 있는 경우, axios 요청이 성공합니다.", async () => {
      const FAKE_TOKEN = "내가만든쿠키";
      window.localStorage.setItem("token", FAKE_TOKEN);

      vi.mocked(axios.post).mockResolvedValue({
        data: { success: true },
      } as AxiosResponse<LoginResponse>);

      renderLoginForm();
      fillLoginForm();
      clickLoginButton();

      expect(window.localStorage.getItem("token")).toEqual(FAKE_TOKEN);
    });
  });

  describe("로그인 시나리오", () => {
    test("존재하지 않는 아이디 입력 시 에러 메시지를 표시", async () => {
      vi.mocked(axios.post).mockResolvedValue({
        data: { success: false, error: "401" },
      } as AxiosResponse<LoginResponse>);

      renderLoginForm();
      fillLoginForm();
      clickLoginButton();

      await waitFor(() => {
        expect(
          screen.getByText("존재하지 않는 아이디입니다."),
        ).toBeInTheDocument();
      });
    });

    test("아이디와 비밀번호 불일치 시 에러 메시지를 표시", async () => {
      vi.mocked(axios.post).mockResolvedValue({
        data: { success: false, error: "402" },
      } as AxiosResponse<LoginResponse>);

      renderLoginForm();
      fillLoginForm();
      clickLoginButton();

      await waitFor(() => {
        expect(
          screen.getByText("비밀번호가 아이디와 일치하지 않습니다."),
        ).toBeInTheDocument();
      });
    });

    test("아이디와 비밀번호가 일치하는 경우 로그인 성공", async () => {
      vi.mocked(axios.post).mockResolvedValue({
        data: { success: true },
      } as AxiosResponse<LoginResponse>);

      renderLoginForm();
      fillLoginForm();
      clickLoginButton();
    });

    test("로그인 성공 후 입력 필드가 초기화 및 오류 메시지 없음", async () => {
      vi.mocked(axios.post).mockResolvedValue({
        data: { success: true },
      } as AxiosResponse<LoginResponse>);

      renderLoginForm();
      fillLoginForm();
      clickLoginButton();

      await waitFor(() => {
        expect(screen.getByLabelText("아이디")).toHaveValue("");
        expect(screen.getByLabelText("비밀번호")).toHaveValue("");
        expect(screen.queryByText("존재하지 않는 아이디입니다.")).toBeNull();
        expect(
          screen.queryByText("비밀번호가 아이디와 일치하지 않습니다."),
        ).toBeNull();
      });
    });
  });

  test("서버 에러 처리", async () => {
    vi.mocked(axios.post).mockResolvedValue({
      data: { success: false, error: "500", message: "Internal server error" },
    } as AxiosResponse<LoginResponse>);

    renderLoginForm();
    fillLoginForm();
    clickLoginButton();

    await waitFor(() => {
      expect(window.localStorage.getItem("token")).toBeNull();
      // 서버 에러 메시지 확인 로직 추가 필요
    });
  });
});
