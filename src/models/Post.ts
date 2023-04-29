import { Document, Schema, model } from "mongoose";

interface IPost extends Document {
  id: string;
  title: string;
  description: string;
  hoursCount?: number;
  lecturerName?: string;
  tags: string[];
  categoryId: string;
}

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    hoursCount: {
      type: Number,
      required: false,
    },
    lecturerName: {
      type: String,
      required: false,
    },
    tags: {
      type: Array,
      required: true,
    },
    categoryId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Post = model<IPost>("Post", PostSchema);
