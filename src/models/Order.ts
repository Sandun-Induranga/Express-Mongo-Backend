import { Schema, model } from "mongoose";

interface IOrder extends Document {
  orderId: string;
  Code: string;
  qty: string;
  price: number;
}

const OrderSchema = new Schema({
  orderId: {
    type: String,
    reruired: true,
  },
  Code: {
    type: String,
    reruired: true,
  },
  qty: {
    type: String,
    reruired: true,
  },
  price: {
    type: Number,
    reruired: true,
  },
});

export const order = model<IOrder>("Item", OrderSchema);
