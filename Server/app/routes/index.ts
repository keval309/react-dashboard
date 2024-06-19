import { Router } from "express";
import appRoutes from "./AppRoutes";




const router = Router();

router.use(appRoutes) ;

export default router;