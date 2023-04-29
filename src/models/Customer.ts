import { Schema, model } from "mongoose";

interface ICustomer extends Document {
  id: string;
  name: string;
  address: string;
  salary: number;
}

const CustomerSchema = new Schema({
  id: {
    type: String,
    reruired: true,
  },
  name: {
    type: String,
    reruired: true,
  },
  address: {
    type: String,
    reruired: true,
  },
  salary: {
    type: Number,
    reruired: true,
  },
});

export const Customer = model<ICustomer>("Customer", CustomerSchema);
