import express, { Router } from "express";
import CategoryController from "../controllers/CategoryController";

export default class CategoryRoutes {
  private router: Router = express.Router();
  private categoryController: CategoryController = new CategoryController();

  constructor() {
    this.configRoutes();
  }

  private configRoutes = (): void => {
    // POST /api/v1/category
    this.router.post("/", this.categoryController.createCategory);

    // GET /api/v1/category
    this.router.get("/", this.categoryController.retrieveAllCategories);

    // PUT /api/v1/category/:id
    this.router.put("/:id", this.categoryController.updateCategory);

    // DELETE /api/v1/category/:id
    this.router.delete("/:id", this.categoryController.deleteCategory);
  };

  public getRouter = (): Router => {
    return this.router;
  };
}
