import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useQuery } from "@tanstack/react-query";
import { AppUseSelector } from "@/store";

//^ redux action
import { productActions } from "@/store/slice/product-slice";

//^ http request
import { getAllCartsHandler, getUserHandler } from "@/http/get";
import { GetCartDataRes, GetUserRes } from "@/http/get/types";

//^ components
import ErrorAlert from "@/components/error-message";
import Spinner from "@/components/ui-component/spinner/Spinner";
import PaymentMethod from "@/components/payment-method/PaymentMethod";
import { Skeleton } from "@/components/ui/skeleton";

export default function CheckoutPage() {
  const dispatch = useDispatch();
  const productTotalPrice = AppUseSelector((state) => state.product.productSubTotalPrice);

  const {
    data: cartsData,
    isLoading: cartsIsLoading,
    isError: cartsIsError,
    error: cartsError,
    refetch: cartsRefetch,
  } = useQuery<GetCartDataRes, any>({
    queryKey: ["get-all-shopping-carts"],
    queryFn: ({ signal }) => getAllCartsHandler({ signal }),
    gcTime: 0,
    staleTime: Infinity,
  });

  useEffect(() => {
    if (!cartsIsLoading) {
      let sumOfPrices = 0.0;

      cartsData?.carts.forEach((cart) => {
        const cartPrice = parseFloat(cart.prodPrice) * cart.prodQty;

        sumOfPrices += cartPrice;
      });

      dispatch(productActions.addProdSubTotalHandler(sumOfPrices));
    }
  }, [cartsData, cartsIsLoading]);

  const {
    data: getUserData,
    isLoading: getUserIsLoading,
    isRefetching: getUserIsRefetching,
    isError: getUserIsError,
    error: getUserError,
    refetch: getUserRefetch,
  } = useQuery<GetUserRes, any>({
    queryKey: ["get-user"],
    queryFn: ({ signal }) => getUserHandler({ signal }),
    gcTime: 0,
    staleTime: Infinity,
  });

  return (
    <>
      {cartsIsError && (
        <ErrorAlert
          title={`Error code: ${cartsError?.code || 500}`}
          subTitle={`Message: ${
            cartsError?.info?.error?.message
              ? cartsError?.info?.error?.message
              : (cartsError?.info && cartsError?.info?.message) || "Something went wrong"
          }`}
          onConformed={() => {
            getUserRefetch();
          }}
          clg={cartsError?.info}
        />
      )}
      {getUserIsError && (
        <ErrorAlert
          title={`Error code: ${getUserError?.code || 500}`}
          subTitle={`Message: ${
            getUserError?.info?.error?.message
              ? getUserError?.info?.error?.message
              : (getUserError?.info && getUserError?.info?.message) || "Something went wrong"
          }`}
          onConformed={() => {
            cartsRefetch();
          }}
          clg={getUserError?.info}
        />
      )}
      <div className="flex flex-col gap-8">
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-medium">Checkout</CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="pt-5">
              <CardDescription className="grid grid-cols-[2fr,0.5fr] gap-8 text-slate-600 text-base">
                {cartsIsLoading ? (
                  <Spinner />
                ) : (
                  <>
                    <div className="flex flex-col gap-4">
                      <div className="grid grid-cols-2 gap-4">
                        <p className="font-semibold text-lg">Delivery Address</p>
                        {getUserIsLoading ? (
                          <div className="flex flex-col gap-2">
                            <Skeleton className="h-5 w-32" />
                            <Skeleton className="h-5" />
                          </div>
                        ) : (
                          <p className="flex flex-col gap-1">
                            <span>{getUserData?.userData.name}</span>
                            <span>{getUserData?.userData.address}</span>
                          </p>
                        )}
                      </div>
                      <Separator />
                      <PaymentMethod />
                    </div>
                    <div className="border rounded-lg p-4 flex flex-col gap-4">
                      <p className="font-semibold text-lg">Order Summary</p>
                      <div className="flex justify-between">
                        <p>Items:</p>
                        <p>{`\u20B9${productTotalPrice}`}</p>
                      </div>
                      <Separator />
                      <div className="flex justify-between">
                        <p className="text-red-700 text-xl font-bold">Order Total:</p>
                        <p className="text-red-700 text-xl font-bold">{`\u20B9${productTotalPrice}`}</p>
                      </div>
                    </div>
                  </>
                )}
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
