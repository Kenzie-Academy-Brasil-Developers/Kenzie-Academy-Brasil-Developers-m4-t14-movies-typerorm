import { Repository } from "typeorm";
import { z } from "zod";
import { Movie } from "../entities/movies.entity";
import {
  movieSchema,
  movieRequestSchema,
  retrieveMoviesSchema,
  updateMovieSchema,
} from "../schemas/movies.schemas";

type IMovie = z.infer<typeof movieSchema>;
type IMovieRequest = z.infer<typeof movieRequestSchema>;
type IMovieList = z.infer<typeof retrieveMoviesSchema>;
type IMovieUpdate = z.infer<typeof updateMovieSchema>;
type IMovieRepo = Repository<Movie>;

interface IMoviesPages {
    prevPage: string | null;
    nextPage: string | null;
    count: number;
    data: Movie[];
}

interface IOrderBy {
    [key: string]: 'ASC' | 'DESC';
}

export { IMovie,IMoviesPages,IOrderBy, IMovieRepo, IMovieRequest, IMovieList, IMovieUpdate };
