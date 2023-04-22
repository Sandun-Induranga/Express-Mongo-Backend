import { Document, Schema, model } from "mongoose";

interface IPost extends Document {
  id: string;
  title: string;
  description: string;
  hoursCount?: number;
  lecturerName?: string;
  tags: string[];
}

const PostSchema = new Schema({
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
    required: true,
  },
  lecturerName:{
    type: String,
    required: true,
  },
  tags:{
    type: String[],
    required: true,
  },
},{timestamps:true});

export const user = model("Post", PostSchema);
