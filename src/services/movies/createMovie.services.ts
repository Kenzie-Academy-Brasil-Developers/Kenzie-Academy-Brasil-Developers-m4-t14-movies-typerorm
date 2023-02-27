import { IMovieRequest,IMovieRepo,IMovie } from "../../interfaces";
import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities";
import { Repository } from "typeorm";
import { movieRequestSchema } from "../../schemas/movies.schemas";

const createMovie = async (
  movieData: Movie
): Promise<IMovieRequest> => {
    const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);
  
  const movie: Movie = movieRepository.create(movieData);

  await movieRepository.save(movie);

  const newMovie = movieRequestSchema.parse(movie);

  return newMovie;
};

export default createMovie;
