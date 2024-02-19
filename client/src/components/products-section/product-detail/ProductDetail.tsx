import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

//^ http request
import { getProductHandler } from "@/http/get";
import { GetProductDetailRes, ProductDetail as ProductDetailRes } from "@/http/get/types";

//^ shadcn-ui
import { Card } from "@/components/ui/card";

//^ ui-component
import ErrorAlert from "@/components/error-message";
import Spinner from "@/components/ui-component/spinner/Spinner";
import Product from "./product/Product";

export default function ProductDetail() {
  const params = useParams() as { productId: string };

  const {
    data: productDetailData,
    isLoading: productDetailIsLoading,
    isRefetching: productDetailIsRefetching,
    isError: productDetailIsError,
    error: productDetailError,
    refetch: productDetailRefetch,
  } = useQuery<GetProductDetailRes, any>({
    queryKey: ["get-product-detail"],
    queryFn: ({ signal }) => getProductHandler({ signal, productId: params.productId }),
    staleTime: Infinity,
    gcTime: 0,
    enabled: typeof params.productId !== "undefined",
  });

  return (
    <>
      {productDetailIsError && (
        <ErrorAlert
          title={`Error code: ${productDetailError?.code || 500}`}
          subTitle={`Message: ${
            productDetailError?.info?.error?.message
              ? productDetailError?.info?.error?.message
              : (productDetailError?.info && productDetailError?.info?.message) || "Something went wrong"
          }`}
          onConformed={() => {
            productDetailRefetch();
          }}
          clg={productDetailError?.info}
        />
      )}
      {productDetailIsLoading || productDetailIsRefetching ? (
        <Spinner />
      ) : (
        <Card className="rounded-md p-4 shadow-none h-full">
          <div>
            <Product product={productDetailData?.productDetail as ProductDetailRes} />
          </div>
        </Card>
      )}
    </>
  );
}
