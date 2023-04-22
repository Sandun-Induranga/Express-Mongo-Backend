import { Router } from "express";
import UserRoutes from "./UserRoutes";
import PostRoutes from "./PostRoutes";

const router: Router = Router();

const url_prefix = "/api/v1";

router.use(`${url_prefix}/user`, new UserRoutes().getRouter());
router.use(`${url_prefix}/post`, new PostRoutes().getRouter());

export default router;
