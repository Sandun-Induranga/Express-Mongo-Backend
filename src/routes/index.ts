import { Router } from "express";
import UserRoutes from "./UserRoutes";
import PostRoutes from "./PostRoutes";
import CustomerRoutes from "./CustomerRoutes";
import ItemRoutes from "./ItemRoutes";
import OrderRoutes from "./OrderRoutes";
import CategoryRoutes from "./CategoryRoutes";

const router: Router = Router();

const url_prefix = "/api/v1";

router.use(`${url_prefix}/user`, new UserRoutes().getRouter());
router.use(`${url_prefix}/post`, new PostRoutes().getRouter());
router.use(`${url_prefix}/customer`, new CustomerRoutes().getRouter());
router.use(`${url_prefix}/item`, new ItemRoutes().getRouter());
router.use(`${url_prefix}/order`, new OrderRoutes().getRouter());
router.use(`${url_prefix}/category`, new CategoryRoutes().getRouter());

export default router;
