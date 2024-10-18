import { Router } from "express";
import * as placesCont from "../controllers/places.controller";
import { validateReq } from "../middlewares/validate";
import { PlaceCreatedDto } from "../dtos/place-created.dto";

const router = Router();

router.get("/", placesCont.getAll);
router.get("/:id", placesCont.getById);

router.post("/", validateReq(PlaceCreatedDto), placesCont.create);
router.patch("/", placesCont.updateById);

router.delete("/", placesCont.deleteById);

export default router;
