import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { MovieDto } from "../dto/movie.dto";
import { constants } from "../constants";
const axios = require("axios").default;

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() {
  }

  public async getMovies(): Promise<MovieDto[]> {
    const bla = await axios.get(constants.movieEndpoint);
    return bla.data;
  }
}
