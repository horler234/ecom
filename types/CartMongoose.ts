type CartItem = {
  productId: string;
  name: string;
  qty: number;
  price: number;
};

export interface CartMongoose {
  userId: string;
  items: CartItem[];
  bill: number;
}
