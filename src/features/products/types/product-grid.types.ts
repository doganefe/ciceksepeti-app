export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  image2x: string;
  hasFreeDelivery?: boolean;
  quantity?: number;
  categoryId: string;
}

export interface ProductGridProps {
  products: Product[];
}
