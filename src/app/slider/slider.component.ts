import { Component, Input } from '@angular/core';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { GenreEnum } from "../enums/genre-enum";
import { MovieService } from "../services/movie.service";
import { TvSeriesService } from "../services/tv-series.service";
import { MovieDto } from "../dto/movie.dto";
import { TvSeriesDto } from "../dto/tv-series.dto";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  @Input()
  id: any;
  @Input()
  genre: any;

  public slides: { src: string, title: string }[] = [];
  public movies: MovieDto[] = [];
  public tvSeries: TvSeriesDto[] = [];
  public numberOfClicks = 0;
  public scrollDelta = 0;
  public faChevronRight = faChevronRight;
  public faChevronLeft = faChevronLeft;

  constructor(private readonly movieService: MovieService, private readonly tvSeriesService: TvSeriesService) {
  }

  async ngOnInit() {
    this.movies = await this.movieService.getMovies(this.genre);
    this.tvSeries = await this.tvSeriesService.getTvSeries(this.genre);
    this.getSlides();
    console.log(this.slides);
  }

  public onRightArrowClicked() {
    if (this.numberOfClicks < this.slides.length - 1) {
      this.numberOfClicks++;
    }
    const slidePictureContainer = document.querySelector(`.slide-picture-container-${this.id}`);
    console.log(slidePictureContainer);
    const slidePictureImage = document.querySelectorAll('.slide-picture-img');
    const leftScroll = parseInt(slidePictureImage.item(0).getAttribute('width')!) + 20 ?? 420;
    console.log(leftScroll * this.numberOfClicks)
    slidePictureContainer?.scroll({left: leftScroll * this.numberOfClicks})
  }

  public onLeftArrowClicked() {
    if (this.numberOfClicks > 0) {
      this.numberOfClicks--;
    }
    const slidePictureContainer = document.querySelector(`.slide-picture-container-${this.id}`);
    console.log(slidePictureContainer);
    const slidePictureImage = document.querySelectorAll('.slide-picture-img');
    const leftScroll = parseInt(slidePictureImage.item(0).getAttribute('width')!) + 20 ?? 420;
    console.log(leftScroll * this.numberOfClicks)
    slidePictureContainer?.scroll({left: leftScroll * this.numberOfClicks})
  }

  private getSlides() {
    for (const movie of this.movies) {
      const formattedTitle = movie.title.toLowerCase().trim().replace(/ /g, '_')
      this.slides.push({ src: `/assets/images/movies/${formattedTitle}.png`, title: movie.title });
    }

    for (const tvSeries of this.tvSeries) {
      const formattedTitle = tvSeries.title.toLowerCase().trim().replace(/ /g, '_')
      this.slides.push({ src: `/assets/images/tv-series/${formattedTitle}.png`, title: tvSeries.title });
    }
  }
}
