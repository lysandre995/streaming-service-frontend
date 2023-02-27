import { GenreEnum } from "../enums/genre-enum";

export interface TvSeriesDto {
  title: string;
  genre: GenreEnum;
  year: number;
  seasons: number;
  description: string;
}
