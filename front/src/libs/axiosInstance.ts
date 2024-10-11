// lib/axiosInstance.js
import axios from "axios";
import { getSession } from "next-auth/react";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axiosInstance.interceptors.request.use(async (config) => {
  if (typeof window !== "undefined") {
    const session = await getSession();
    console.log(session?.token?.token);
    if (session?.token) {
      config.headers["Authorization"] = `Bearer ${session.token.token}`;
    }
  }
  return config;
});

export default axiosInstance;
