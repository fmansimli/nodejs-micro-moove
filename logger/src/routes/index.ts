import { Router } from "express";
import * as logsCont from "../controllers/logs.controller";

const router = Router();

router.get("/", logsCont.getAll);
router.get("/:id", logsCont.getById);

router.post("/", logsCont.create);
router.patch("/", logsCont.updateById);

router.delete("/", logsCont.deleteById);

export default router;
