import express, { Router } from "express";
import PostController from "../controllers/PostController";

export default class PostRoutes {
  private router: Router = express.Router();
  private postController: PostController = new PostController();

  private configRoutes = (): void => {
    this.router.post("/", this.postController.createPost);
    this.router.get("/", this.postController.retriveAllPost);
    this.router.put("/:id", this.postController.updatePost);
    this.router.delete("/", this.postController.deletePost);
  };
}
