import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities";
import { IMovieUpdate, IMovie } from "../../interfaces";
import { movieSchema } from "../../schemas/movies.schemas";

const updateMovie = async (
  movieData: any,
  movieId: number
): Promise<IMovie> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const outdatedMovieData: Movie | null = await movieRepository.findOneBy({
    id: movieId,
  });

  const movie = movieRepository.create({
    ...outdatedMovieData,
    ...movieData,
  });

  await movieRepository.save(movie);

  const updatedMovie = movieSchema.parse(movie);

  return updatedMovie;
};

export default updateMovie;
