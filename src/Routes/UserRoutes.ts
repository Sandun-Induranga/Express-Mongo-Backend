import express, { Router } from "express";
import UserController from "../controllers/UserController";

export default class UserRoutes {
  private router: Router = express.Router();
  private userController: UserController = new UserController();

  private configRoutes = (): void => {
    this.router.post("./", this.userController.createUser);
    this.router.get("./", this.userController.signIn);
  };
}
