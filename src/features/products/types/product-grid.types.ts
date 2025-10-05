export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  hasFreeDelivery?: boolean;
  quantity?: number;
  categoryId: string;
}

export interface ProductGridProps {
  products: Product[];
}
