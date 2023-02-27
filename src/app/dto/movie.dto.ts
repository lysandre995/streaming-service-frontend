import { GenreEnum } from "../enums/genre-enum";

export interface MovieDto {
  title: string;
  genre: GenreEnum;
  year: number;
  duration: number;
  description: string;
}
