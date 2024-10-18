import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

import router from "./routes";
import * as errors from "./middlewares/error";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/places", router);

app.use(errors.catch404);
app.use(errors.catch500);

export default app;
