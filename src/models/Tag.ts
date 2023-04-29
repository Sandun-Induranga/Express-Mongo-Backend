import { Document, Schema, model } from "mongoose";

export interface ICategory extends Document {
  text: string;
}

const TagSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Tag = model("Tag", TagSchema);
