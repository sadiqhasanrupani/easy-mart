export type GetUserRes = {
  message: string;
  userData: {
    id: number;
    name: string;
    image: string | null;
    email: string;
  };
};

export type Product = {
  id: number;
  categoryId: number;
  categoryNm: string;
  name: string;
  price: string;
  description: string | null;
  prodImages: string[] | null;
};

export type Products = Product[];

export type GetProductsRes = {
  message: string;
  products: Products;
};

export type ProductDetail = {
  id: number;
  name: string;
  description: string | null;
  price: string;
  images: string[] | null;
  categoryNm: string;
};

export type GetProductDetailRes = {
  productDetail: ProductDetail;
};
