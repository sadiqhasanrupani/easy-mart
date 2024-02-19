import React from "react";
import { motion } from "framer-motion";

//^ http request
import { Products } from "@/http/get/types";

//^ component
import ProductCard from "./product-card/ProductCard";

type ProductsSectionProps = {
  products: Products;
};

export default function ProductsSection(props: ProductsSectionProps) {
  // const [products, setProducts] = useState<Products>(props.products);

  return (
    <motion.div className="grid grid-cols-3 gap-8">
      {props.products.map((product, index) => {
        return (
          <React.Fragment key={index}>
            <ProductCard product={product} />
          </React.Fragment>
        );
      })}
    </motion.div>
  );
}
