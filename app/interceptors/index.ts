"use client";

import axios from "axios";
import { toast } from "react-toastify";

export const adminCaller = axios.create({
  // baseURL: process.env.NEXT_BASE_URL,
  baseURL: "https://greenloop-latest.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
    tenant: "root",
  },
});

adminCaller.interceptors.request.use(
  async (config) => {
    const token = sessionStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    if (!token) {
      // Logout();
    }

    return config;
  },

  (err) => {
    return Promise.reject(err);
  }
);

// adminCaller.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       toast("Your session has expired or is no longer valid.", {
//         type: "error",
//         autoClose: 2000,
//         toastId: "adminCaller",
//         hideProgressBar: true,
//         progress: undefined,
//       });
//       // Logout();
//     }

//     if (error.response && error.response.status === 403) {
//       toast("You do not have permission to perfom this operation.", {
//         type: "error",
//         autoClose: 3000,
//         toastId: "adminCaller",
//         hideProgressBar: true,
//         progress: undefined,
//       });
//       // Logout();
//     }
//     return Promise.reject(error);
//   }
// );
