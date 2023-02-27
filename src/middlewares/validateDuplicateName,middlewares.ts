import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../error";
const checkDuplicateMovieName = async ( req: Request, res: Response, next: NextFunction) => {

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