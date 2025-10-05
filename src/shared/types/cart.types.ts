// Cart Types
export interface CartItem {
  id: string;
  name: string;
  price: string;
  image: string;
  hasFreeDelivery?: boolean;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  totalItems: number;
  addToCart: (product: Omit<CartItem, "quantity">) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getItemQuantity: (productId: string) => number;
}
