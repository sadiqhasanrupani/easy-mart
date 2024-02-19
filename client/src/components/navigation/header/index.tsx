import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

//^ http request
import { getUserHandler } from "@/http/get";
import { GetUserRes } from "@/http/get/types";

//^ shadcn-ui
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

//^ ui-component
import ErrorAlert from "@/components/error-message";
import SearchBar from "@/components/ui-component/button/search-bar";
import { makeInitial } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function Header() {
  const navigate = useNavigate();

  const {
    data: getUserData,
    isLoading: getUserIsLoading,
    isRefetching: getUserIsRefetching,
    isError: getUserIsError,
    error: getUserError,
    refetch: getUserRefetch,
  } = useQuery<GetUserRes, any>({
    queryKey: ["get-user"],
    queryFn: getUserHandler,
    gcTime: 0,
    staleTime: Infinity,
  });

  return (
    <>
      {getUserIsError && (
        <ErrorAlert
          title={`Error code: ${getUserError?.code || 500}`}
          subTitle={`Message: ${
            getUserError?.info?.error?.message
              ? getUserError?.info?.error?.message
              : (getUserError?.info && getUserError?.info?.message) || "Something went wrong"
          }`}
          onConformed={() => {
            getUserRefetch();
          }}
          clg={getUserError?.info}
        />
      )}
      <Card className="px-6 py-4 rounded-none" id="header">
        <div className="flex justify-between">
          <div className="flex gap-3 text-slate-600 items-center cursor-pointer" onClick={() => navigate("/")}>
            <ShoppingCart strokeWidth={2} className="w-8 h-8" />
            <p className="font-medium text-2xl protest-riot">Easy Mart</p>
          </div>
          <div className="flex gap-6 items-center">
            <SearchBar className="w-[20rem] justify-start gap-2 rounded-lg h-full" />
            {getUserIsLoading || getUserIsRefetching ? (
              <Skeleton className="w-12 h-12 rounded-full" />
            ) : (
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger className="cursor-default">
                    <Avatar className="w-12 h-12">
                      <AvatarImage
                        className="object-cover"
                        src={getUserData?.userData.image as string}
                        alt={getUserData?.userData.name}
                      />
                      <AvatarFallback>{makeInitial(getUserData?.userData.name as string)}</AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent align="end">{getUserData?.userData.name}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        </div>
      </Card>
    </>
  );
}
