import { NextResponse } from "next/server";
import { parseCookies } from "nookies";

export const authMiddleware = (handler) => async (context) => {
  const cookies = parseCookies(context);

  const token = cookies.access_token;

  if (!token) {
    return NextResponse.redirect("/auth/login");
  }

  return handler(context);
};
