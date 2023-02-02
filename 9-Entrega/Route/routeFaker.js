import { Router } from "express";
import { prodController } from "../controller/prod-controller";

const router = Router()

router.get("/randomProds", prodController.getRandomProds);

export default router;