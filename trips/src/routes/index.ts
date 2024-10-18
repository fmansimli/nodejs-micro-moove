import { Router } from "express";
import * as tripsCont from "../controllers/trips.controller";

import {validateReq} from "moove-common/dist/middlewares/validate"
import { TripCreatedDto } from "../dtos";

const router = Router();

router.get("/", tripsCont.getAll);
router.get("/:id", tripsCont.getById);

router.post("/", validateReq(TripCreatedDto),tripsCont.create);
router.patch("/", tripsCont.updateById);

router.delete("/", tripsCont.deleteById);

export default router;
