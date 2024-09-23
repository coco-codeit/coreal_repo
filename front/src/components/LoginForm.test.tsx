import * as React from "react";
import { render } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { test } from "vitest";

test("로그인폼 호출", async () => {
  render(<LoginForm title="로그인" />);
});
