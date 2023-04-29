import { Request, RequestHandler, Response } from "express";
import mongoose, { ClientSession } from "mongoose";
import { Category } from "../models/Category";
import { Post } from "../models/Post";
import { Tag } from "../models/Tag";

export default class PostController {
  createPost: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    let session: ClientSession | null = null;
    try {
      const { categoryName } = req.params;
      session = await mongoose.startSession();
      session.startTransaction();
      let category = await Category.findOne({
        categoryName: categoryName,
      }).session(session);
      if (!category) {
        category = new Category({ categoryName: categoryName });
        category = await category.save();
      }
      console.log(category);
      const post = new Post(req.body);
      post.categoryId = category._id.toString();
      await post.save();
      const tags = req.body.tags;
      if (tags.length > 0) {
        for (let i = 0; i < tags.length; i++) {
          let tag = await Tag.findOne({ text: tags(i) }).session(session);
          if (!tag) {
            tag = new Tag({ text: tags(i) });
            await tag.save();
          }
        }
      }
      await session.commitTransaction();
      session.endSession();

      return res.status(200).json({ message: "Successfully Added..!" });
    } catch (error: unknown) {
      if (session != null) {
        try {
          await session.abortTransaction();
        } catch (e) {
          console.log("Error aborting");
        }
      } else {
        return res.status(500).json({ message: "Unknown Error Occurred!" });
      }
    }
    return res;
  };

  retriveAllPost: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    return res;
  };

  updatePost: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    return res;
  };

  deletePost: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    return res;
  };
}
