import { Router } from "express";
import UserRoutes from "./UserRoutes";
import PostRoutes from "./PostRoutes";

const router: Router = Router();

router.use("/api/v1/user", new UserRoutes().getRouter());
router.use("/api/v1/post", new PostRoutes().getRouter());

export default router;
