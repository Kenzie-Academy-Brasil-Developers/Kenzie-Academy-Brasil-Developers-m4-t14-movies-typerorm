import { Request, Response } from "express";
import { Movie } from "../entities/index";
import { IMovie } from "../interfaces";
import createMovie from "../services/movies/createMovie.services";
import deleteMovies from "../services/movies/deleteMovies.services";
import retrieveMovies from "../services/movies/retrieveMovies.services";
import updateMovie from "../services/movies/updateMovies.services";

const createMovieController = async (req: Request, res: Response) => {
   
    const movieData: Movie = req.body;

  const newMovie = await createMovie(movieData);

  return res.status(201).json({
    id: newMovie.id,
    name: newMovie.name,
    description: newMovie.description,
    duration: newMovie.duration,
    price: newMovie.price,
  });
};

const retrieveMoviesController = async (req: Request, res: Response) => {
    const params = req.query;
    const movies = await retrieveMovies(params)

    return res.status(200).json(movies);
};

const deleteMovieController = async (req: Request, res: Response) => {
  await deleteMovies(parseInt(req.params.id));

  return res.status(204).end();
};

const updateMovieController = async (req: Request, res: Response) => {
  const movieData = req.body;
  const movieId = parseInt(req.params.id);

  const updatedMovie = await updateMovie(movieData, movieId);

  return res.json(updatedMovie);
};

export {
  createMovieController,
  retrieveMoviesController,
  deleteMovieController,
  updateMovieController,
};
