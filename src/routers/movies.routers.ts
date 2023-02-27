import { Router } from "express";
import {
  createMovieController,
  deleteMovieController,
  retrieveMoviesController,
  updateMovieController,
} from "../controllers/movies.controllers";
import validateData from "../middlewares/validateData.middlewares";
import validateMovieExists from "../middlewares/validateMovieExists.midlewares";
import checkDuplicateMovieName from "../../validateDuplicatedName.middleware";
import {
  movieRequestSchema,
  updateMovieSchema,
} from "../schemas/movies.schemas";

const movieRoutes: Router = Router();

movieRoutes.post(
  "",
  validateData(movieRequestSchema),
  checkDuplicateMovieName,
  createMovieController
);
movieRoutes.get("", retrieveMoviesController);
movieRoutes.delete("/:id", validateMovieExists, deleteMovieController);
movieRoutes.patch(
  "/:id",
  validateData(updateMovieSchema),
  validateMovieExists,
  checkDuplicateMovieName,
  updateMovieController
);

export default movieRoutes;
