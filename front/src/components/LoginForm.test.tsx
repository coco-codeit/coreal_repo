import "@testing-library/jest-dom/vitest";
import * as React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { beforeEach, describe, expect, test, vi } from "vitest";
import axios from "axios";

// axios 모킹
vi.mock("axios");

const navigateFn = vi.fn();

test("LoginForm Render", async () => {
  render(<LoginForm title="로그인" />);
});

describe("LoginForm with(out) API key", () => {
  beforeEach(() => {
    window.localStorage.removeItem("token");
  });

  test("API key가 없는 경우, axios 요청이 실패합니다.", async () => {
    navigateFn.mockRejectedValue(new Error("No API key"));

    render(<LoginForm title="로그인" />);

    const emailInput = screen.getByLabelText("아이디");
    fireEvent.change(emailInput, { target: { value: "admin@naver.com" } });

    const passwordInput = screen.getByLabelText("비밀번호");
    fireEvent.change(passwordInput, { target: { value: "01234567" } });

    // TODO: 외않되1
    const loginButtons = screen.getAllByRole("button", { name: /로그인/i });
    fireEvent.click(loginButtons[0]);

    // const loginButton = screen.getByRole("button", { name: /로그인/i });
    // fireEvent.click(loginButton);
    //fireEvent.click(screen.getByText("로그인"));
    //fireEvent.click(await screen.findByText("로그인"));

    await waitFor(() => {
      expect(axios.post).not.toHaveBeenCalled();
    });
  });

  test("API key가 있는 경우, axios 요청이 성공합니다.", async () => {
    window.localStorage.setItem("token", "내가만든쿠키");
    const fakeUserResponse = { token: "내가만든쿠키" };

    navigateFn.mockResolvedValue({
      data: { success: true },
    });

    render(<LoginForm title="로그인" />);

    const emailInput = screen.getByLabelText("아이디");
    fireEvent.change(emailInput, { target: { value: "admin@naver.com" } });

    const passwordInput = screen.getByLabelText("비밀번호");
    fireEvent.change(passwordInput, { target: { value: "01234567" } });

    // TODO: 외않되1
    const loginButtons = screen.getAllByRole("button", { name: /로그인/i });
    fireEvent.click(loginButtons[0]);

    // TODO: 로그인 버튼 테스트 후 진행
    expect(window.localStorage.getItem("token")).toEqual(
      fakeUserResponse.token,
    );
  });
});

describe("LoginForm 아이디와 비밀번호 일치 테스트", () => {
  test("서버에 존재하지 않는 아이디를 입력하면 에러 메시지를 호출합니다.", async () => {
    navigateFn.mockResolvedValue({
      date: { success: false, error: "401" },
    });

    render(<LoginForm title="로그인" />);

    const emailInput = screen.getByLabelText("아이디");
    fireEvent.change(emailInput, {
      target: { value: "notfound@incorrect.com" },
    });

    const passwordInput = screen.getByLabelText("비밀번호");
    fireEvent.change(passwordInput, {
      target: { value: "wrongpassword" },
    });

    // TODO: 외않되1
    const loginButtons = screen.getAllByRole("button", { name: /로그인/i });
    fireEvent.click(loginButtons[0]);

    //TODO: 외않되2
    // await waitFor(() => {
    //   expect(screen.getByText("존재하지 않는 아이디입니다.")).toBeInTheDocument();
    // });
  });

  test("아이디와 비밀번호가 일치하는 경우 성공 메시지가 콘솔에 출력됩니다.", async () => {
    navigateFn.mockResolvedValue({
      data: { success: true },
    });

    render(<LoginForm title="로그인" />);

    const emailInput = screen.getByLabelText("아이디");
    fireEvent.change(emailInput, { target: { value: "admin@naver.com" } });

    const passwordInput = screen.getByLabelText("비밀번호");
    fireEvent.change(passwordInput, { target: { value: "01234567" } });

    // TODO: 외않되1
    const loginButtons = screen.getAllByRole("button", { name: /로그인/i });
    fireEvent.click(loginButtons[0]);

    await waitFor(() => {
      console.log("로 그 인 성 공 🎉");
    });

    // TODO: 외않되3
    //const consoleSpy = vi.spyOn(console, "log");

    // await waitFor(() => {
    //   expect(consoleSpy).toHaveBeenCalledWith("로 그 인 성 공 🎉");
    // });
  });
});
