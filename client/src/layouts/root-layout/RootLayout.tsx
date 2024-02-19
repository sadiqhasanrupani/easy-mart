import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";

//^ http
import { verifyToken } from "@/http/get";
import { getAuthToken } from "@/lib/is-auth";

export default function RootLayout() {
  const navigate = useNavigate();
  const token = getAuthToken();

  const {
    data: _verifyTokenData,
    isLoading: _verifyTokenIsLoading,
    isRefetching: _verifyTokenIsRefetching,
    isError: verifyTokenIsError,
    error: verifyTokenError,
    refetch: verifyTokenRefetch,
  } = useQuery<any, any>({
    queryKey: ["get-verify-token"],
    queryFn: ({ signal }) => verifyToken({ signal }),
    gcTime: 0,
    staleTime: Infinity,
    enabled: token !== null,
  });

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    verifyTokenRefetch();
  }, [navigate]);

  useEffect(() => {
    if (verifyTokenIsError) {
      if (verifyTokenError.code === 401 || verifyTokenError.code === 500) {
        navigate("/login");
      }
    }
  }, [verifyTokenIsError, verifyTokenError]);

  return (
    <div>
      <Outlet />
    </div>
  );
}
