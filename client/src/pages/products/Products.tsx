import { useQuery } from "@tanstack/react-query";

//^ http request
import { getAllProductsHandler } from "@/http/get";
import { GetProductsRes, Products as ProductsObj } from "@/http/get/types";

//^ ui-component
import ErrorAlert from "@/components/error-message";
import Spinner from "@/components/ui-component/spinner/Spinner";

//^ component
import ProductsSection from "@/components/products-section/ProductsSection";

export default function Products() {
  const {
    data: allProductData,
    isLoading: allProductIsLoading,
    isError: allProductIsError,
    error: allProductError,
    refetch: allProductRefetch,
  } = useQuery<GetProductsRes, any>({
    queryKey: ["get-all-product"],
    queryFn: ({ signal }) => getAllProductsHandler({ signal }),
    staleTime: Infinity,
  });

  return (
    <>
      {allProductIsError && (
        <ErrorAlert
          title={`Error code: ${allProductError?.code || 500}`}
          subTitle={`Message: ${
            allProductError?.info?.error?.message
              ? allProductError?.info?.error?.message
              : (allProductError?.info && allProductError?.info?.message) || "Something went wrong"
          }`}
          onConformed={() => {
            allProductRefetch();
          }}
          clg={allProductError?.info}
        />
      )}
      <div>
        {allProductIsLoading ? (
          <Spinner />
        ) : (
          <div>
            <ProductsSection products={allProductData?.products as ProductsObj} />
          </div>
        )}
      </div>
    </>
  );
}
