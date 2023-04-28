import { Schema, model } from "mongoose";

interface IItem extends Document {
  code: string;
  description: string;
  qty: string;
  price: number;
}

const ItemSchema = new Schema({
  code: {
    type: String,
    reruired: true,
  },
  description: {
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

export const item = model<IItem>("Item", ItemSchema);
