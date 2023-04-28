import express, { Router } from "express";
import OrderController from "../controllers/OrderController";

export default class OrderRoutes {
  private router: Router = express.Router();
  private orderController: OrderController = new OrderController();

  constructor() {
    this.configRoutes();
  }

  private configRoutes = (): void => {
    this.router.post("/", this.orderController.createOrder);
    this.router.get("/", this.orderController.retriveAllOrders);
    this.router.put("/:id", this.orderController.updateOrder);
    this.router.delete("/:id", this.orderController.deleteOrder);
  };

  public getRouter = (): Router => {
    return this.router;
  };
}
