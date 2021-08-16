import { Schema, model } from "mongoose";
import { CartMongoose } from "../types/CartMongoose";

const cartSchema = new Schema<CartMongoose>({
  userId: {
    type: String,
  },
  items: [
    {
      productId: {
        type: String,
      },
      name: String,
      quantity: {
        type: Number,
        required: true,
        min: [1, "Quantity can not be less then 1."],
        default: 1,
      },
      price: Number,
    },
  ],
  bill: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Cart = model("cart", cartSchema);

export default Cart;
