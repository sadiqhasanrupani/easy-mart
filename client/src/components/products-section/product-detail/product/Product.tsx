import { useState } from "react";
import { ProductDetail } from "@/http/get/types";

//^ shadcn-ui
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

type ProductProps = {
  product: ProductDetail;
};

export default function Product(props: ProductProps) {
  const [quantity, setQuantity] = useState(0);

  const images = props.product.images || [];
  const price = parseInt(props.product.price);
  const indianPrice = Intl.NumberFormat("en-IN");

  return (
    <div className="grid grid-cols-[1fr,1fr] gap-16">
      <div>
        <Carousel className="mx-10 rounded-md">
          <CarouselContent>
            {images.map((image) => {
              return (
                <CarouselItem>
                  <Avatar className="w-full h-full rounded-xl">
                    <AvatarImage
                      src={image}
                      className="object-cover w-full rounded-xl"
                      alt={props.product.name}
                      loading="lazy"
                    />
                    <AvatarFallback className="h-[25rem] rounded-lg">Loading...</AvatarFallback>
                  </Avatar>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="flex flex-col h-full justify-center gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-8 text-slate-600">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-2xl font-medium">{props.product.name}</p>
                <p className="cursor-default text-sm font-medium">{props.product.categoryNm}</p>
              </div>
              <div>
                <Badge variant={"destructive"} className="rounded-sm">
                  {`\u20B9` + " " + indianPrice.format(price)}
                </Badge>
              </div>
            </div>
            <p className="text-xl font-medium">{props.product.description}</p>
          </div>
          <Separator />
        </div>
        <div className="flex gap-8">
          <div className="flex gap-4 items-center px-4 border rounded-lg h-full">
            <button disabled={quantity <= 0} onClick={() => setQuantity((prevQty) => prevQty - 1)}>
              <Minus className="w-4" />
            </button>
            <span className="cursor-default">{quantity}</span>
            <button onClick={() => setQuantity((prevQty) => prevQty + 1)}>
              <Plus className="w-4" />
            </button>
          </div>
          <Button size={"lg"}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}
