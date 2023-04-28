import express, { Router } from "express";
import CustomerController from "../controllers/CustomerController";

export default class CustomerRoutes {
  private router: Router = express.Router();
  private customerController: CustomerController = new CustomerController();

  constructor() {
    this.configRoutes();
  }

  private configRoutes = (): void => {
    this.router.post("/", this.customerController.createCustoemr);
    this.router.get("/", this.customerController.retriveAllCustomers);
    this.router.put("/:id", this.customerController.updateCustomer);
    this.router.delete("/:id", this.customerController.deleteCustomer);
  };

  public getRouter = (): Router => {
    return this.router;
  };
}
