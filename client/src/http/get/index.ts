import { getAuthToken } from "@/lib/is-auth";

export async function verifyToken({ signal }: { signal: AbortSignal }) {
  const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/auth/verify-user`, {
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
    },
    signal,
  });

  if (!response.ok) {
    const errorData = await response.json();

    const error: any = new Error("An Error occurred while verifying the user.");

    error.code = response.status;
    error.info = errorData;

    throw error;
  }

  const resData = await response.json();
  return resData;
}

//^ product http request ==========================================

export async function getAllProductsHandler({ signal }: { signal: AbortSignal }) {
  const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/product/get-all`, {
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
    },
    signal,
  });

  if (!response.ok) {
    const errorData = await response.json();

    const error: any = new Error("An Error occurred while getting all the products.");

    error.code = response.status;
    error.info = errorData;

    throw error;
  }

  const resData = await response.json();
  return resData;
}
export async function getProductHandler({ signal, productId }: { signal: AbortSignal; productId: string }) {
  const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/product/get-product/${productId}`, {
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
    },
    signal,
  });

  if (!response.ok) {
    const errorData = await response.json();

    const error: any = new Error("An Error occurred while getting product details.");

    error.code = response.status;
    error.info = errorData;

    throw error;
  }

  const resData = await response.json();
  return resData;
}

//^ product http request ==========================================

//^ user http request =============================================

export async function getUserHandler({ signal }: { signal: AbortSignal }) {
  const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/user/get-user`, {
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
    },
    signal,
  });

  if (!response.ok) {
    const errorData = await response.json();

    const error: any = new Error("An Error occurred while getting user data.");

    error.code = response.status;
    error.info = errorData;

    throw error;
  }

  const resData = await response.json();
  return resData;
}

//^ user http request =============================================
