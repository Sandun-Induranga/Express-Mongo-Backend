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
    try {
      let posts = await Post.find();
      return res
        .status(200)
        .json({ message: "Successfully Loaded..!", responseData: posts });
    } catch (error) {
      if (error instanceof Error)
        res.status(500).json({ message: error.message });

      return res.status(500).json({ message: "Unknown Error Occured..!" });
    }
  };

  updatePost: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const { id } = req.params;
      let updatedPost = Post.findByIdAndUpdate(id, req.body);
      return res
        .status(200)
        .json({
          message: "Successfully Updated..!",
          responseData: updatedPost,
        });
    } catch (error) {
      if (error instanceof Error)
        res.status(500).json({ message: error.message });

      return res.status(500).json({ message: "Unknown Error Occured..!" });
    }
  };

  deletePost: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const { id } = req.params;
      let deletedPost = Post.findByIdAndUpdate(id);
      return res
        .status(200)
        .json({
          message: "Successfully Updated..!",
          responseData: deletedPost,
        });
    } catch (error) {
      if (error instanceof Error)
        res.status(500).json({ message: error.message });

      return res.status(500).json({ message: "Unknown Error Occured..!" });
    }
  };
}
