import { Document, Schema, model } from "mongoose";

export interface ICategory extends Document {
  categoryName: string;
}

const CategorySchema = new Schema(
  {
    categoryName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Category = model<ICategory>("Category", CategorySchema);
