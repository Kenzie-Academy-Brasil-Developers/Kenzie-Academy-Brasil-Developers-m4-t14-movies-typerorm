import express, { Application } from "express";
import "express-async-errors";
import { handleErrors } from "./error";
import movieRoutes from "./routers/movies.routers";

const app: Application = express();
app.use(express.json());

app.use("/movies", movieRoutes);

app.use(handleErrors);

export default app;
