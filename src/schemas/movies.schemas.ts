import { z } from "zod";

const movieSchema = z.object({
  name: z.string().max(50).min(3),
  description: z.string().optional().nullable(),
  duration: z.number(),
  price: z.number(),
});

const movieRequestSchema = movieSchema.extend({
    id: z.number()
})

const retrieveMoviesSchema = z.object({
    prevPage: z.string().nullable(),
    nextPage: z.string().nullable(),
    count: z.number(),
    data: z.array(
      z.object({
        id: z.number(),
        name: z.string(),
        description: z.string().nullable().optional(),
        duration: z.number(),
        price: z.number()
      })
    )
  }).array(); 

const updateMovieSchema = movieRequestSchema.partial();

export {
  movieSchema,
  movieRequestSchema,
  retrieveMoviesSchema,
  updateMovieSchema,
};
