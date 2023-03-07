import { Injectable } from '@angular/core';
import { MovieDto } from "../dto/movie.dto";
import { constants } from "../constants";
import { GenreEnum } from "../enums/genre-enum";
const axios = require("axios").default;

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() {
  }

  public async getMovies(genre?: GenreEnum): Promise<MovieDto[]> {
    const bla = await axios.get(constants.movieEndpoint, { params: { genre } });
    return bla.data;
  }
}
