import { Component } from '@angular/core';
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { MovieService } from "../services/movie.service";
import { MovieDto } from "../dto/movie.dto";
import { TvSeriesDto } from "../dto/tv-series.dto";
import { TvSeriesService } from "../services/tv-series.service";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  public movies: MovieDto[] = [];
  public tvSeries: TvSeriesDto[] = [];
  public slides: {src: string, title: string}[] = [];
  public actualIndex = 0;
  public faChevronRight = faChevronRight;
  public faChevronLeft = faChevronLeft;

  public constructor(private readonly movieService: MovieService, private readonly tvSeriesService: TvSeriesService) {
  }

  async ngOnInit() {
    this.movies = await this.movieService.getMovies();
    this.tvSeries = await this.tvSeriesService.getTvSeries();
    await this.getSlides();
  }


  private async getSlides() {
    const moviesIndexes = new Set<number>();
    const tvSeriesIndexes = new Set<number>();

    for (let i = 0; i < 3; i++) {
      let movieIndexDraw;
      do {
        movieIndexDraw = Math.floor(Math.random() * (this.movies.length - 1));
      } while (moviesIndexes.has(movieIndexDraw))
      moviesIndexes.add(movieIndexDraw);
      let tvSeriesIndexDraw;
      do {
        tvSeriesIndexDraw = Math.floor(Math.random() * (this.tvSeries.length - 1));
      } while (tvSeriesIndexes.has(tvSeriesIndexDraw))
      tvSeriesIndexes.add(tvSeriesIndexDraw);
    }

    for (const index of Array.from(moviesIndexes)) {
      const formattedTitle = this.movies[index].title.toLowerCase().trim().replace(/ /g, '_')
      this.slides.push({ src: `/assets/images/movies/${formattedTitle}.png`, title: this.movies[index].title });
    }

    for (const index of Array.from(tvSeriesIndexes)) {
      const formattedTitle = this.tvSeries[index].title.toLowerCase().trim().replace(/ /g, '_')
      this.slides.push({ src: `/assets/images/tv-series/${formattedTitle}.png`, title: this.tvSeries[index].title });
    }
  }

  public onRightArrowClicked() {
    if (this.actualIndex < this.slides.length - 1) {
      const previousImage = document.querySelector(`.image-${this.actualIndex}`);
      previousImage?.classList.toggle("transparent");
      const previousTitle = document.querySelector(`.text-${this.actualIndex}`);
      previousTitle?.classList.toggle("transparent");
      this.actualIndex++;
      const nextImage = document.querySelector(`.image-${this.actualIndex}`);
      nextImage?.classList.toggle("transparent");
      const nextTitle = document.querySelector(`.text-${this.actualIndex}`);
      nextTitle?.classList.toggle("transparent");
    }
  }

  public onLeftArrowClicked() {
    if (this.actualIndex > 0) {
      const previousImage = document.querySelector(`.image-${this.actualIndex}`);
      previousImage?.classList.toggle("transparent");
      const previousTitle = document.querySelector(`.text-${this.actualIndex}`);
      previousTitle?.classList.toggle("transparent");
      this.actualIndex--;
      const nextImage = document.querySelector(`.image-${this.actualIndex}`);
      nextImage?.classList.toggle("transparent");
      const nextTitle = document.querySelector(`.text-${this.actualIndex}`);
      nextTitle?.classList.toggle("transparent");
    }
  }
}
