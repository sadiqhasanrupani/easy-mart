import { getAuthToken } from "@/lib/is-auth";

import { AddToCartContext, LoginContext } from "./types";

export async function postLoginHandler(body: LoginContext) {
  const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorData = await response.json();

    const error: any = new Error("An Error occurred while logging.");

    error.code = response.status;
    error.info = errorData;

    throw error;
  }

  const resData = await response.json();
  return resData;
}

//^ cart http request ==========================================

export async function postAddToCartHandler(body: AddToCartContext) {
  const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/cart/add-to-cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getAuthToken()}`,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorData = await response.json();

    const error: any = new Error("An Error occurred while adding a product into cart.");

    error.code = response.status;
    error.info = errorData;

    throw error;
  }

  const resData = await response.json();
  return resData;
}

//^ cart http request ==========================================
