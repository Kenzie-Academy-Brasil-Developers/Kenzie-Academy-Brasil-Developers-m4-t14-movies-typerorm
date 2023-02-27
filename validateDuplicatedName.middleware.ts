import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "./src/data-source";
import { Movie } from "./src/entities";
import { AppError } from "./src/error";

const checkDuplicateMovieName = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const movieName: string = req.body.name;
  const movieRepository = AppDataSource.getRepository(Movie);
  const existingMovie = await movieRepository.findOne({
    where: {
      name: movieName,
    },
  });

  if (movieName) {
    if (existingMovie) {
      throw new AppError(`Movie already exists.`, 409);
    }
  }

  next();
};

export default checkDuplicateMovieName;
