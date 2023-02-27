import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { MovieDto } from "../dto/movie.dto";
import { constants } from "../constants";
import { TvSeriesDto } from "../dto/tv-series.dto";
const axios = require("axios").default;

@Injectable({
  providedIn: 'root'
})
export class TvSeriesService {

  constructor() {
  }

  public async getTvSeries(): Promise<TvSeriesDto[]> {
    const bla = await axios.get(constants.tvSeriesEndpoint);
    return bla.data;
  }
}
