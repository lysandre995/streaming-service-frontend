import { Injectable } from '@angular/core';
import { constants } from "../constants";
import { TvSeriesDto } from "../dto/tv-series.dto";
import { GenreEnum } from "../enums/genre-enum";
const axios = require("axios").default;

@Injectable({
  providedIn: 'root'
})
export class TvSeriesService {

  constructor() {
  }

  public async getTvSeries(genre?: GenreEnum): Promise<TvSeriesDto[]> {
    const bla = await axios.get(constants.tvSeriesEndpoint, { params: { genre } });
    return bla.data;
  }
}
