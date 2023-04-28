import express, { Router } from "express";
import ItemController from "../controllers/ItemController";

export default class PostRoutes {
  private router: Router = express.Router();
  private itemController: ItemController = new ItemController();

  constructor() {
    this.configRoutes();
  }

  private configRoutes = (): void => {
    this.router.post("/", this.itemController.createItem);
    this.router.get("/", this.itemController.retriveAllItems);
    this.router.put("/:id", this.itemController.updateItem);
    this.router.delete("/:id", this.itemController.deleteItem);
  };

  public getRouter = (): Router => {
    return this.router;
  };
}
