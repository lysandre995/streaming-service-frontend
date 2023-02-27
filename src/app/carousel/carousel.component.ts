import { Component } from '@angular/core';
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  public movieSlides = [
    '/assets/images/movies/nightmares_unfold.png',
    '/assets/images/movies/the_bounty_hunters.png',
    '/assets/images/movies/the_imaginary_realm.png',
    '/assets/images/movies/the_romantic_journey.png',
    '/assets/images/movies/the_shadow_of_evil.png'
  ];
  public tvSeriesSlides =  [
    "/assets/images/tv-series/a_page_in_time.png",
    "/assets/images/tv-series/the_noir_nights.png",
    "/assets/images/tv-series/the_laugh_riot.png",
    "/assets/images/tv-series/the_unwritten_pages.png",
    "/assets/images/tv-series/together_forever.png"
  ];
  public movieTitles = [
    "Nightmares Unfold",
    "The Bounty Hunters",
    "The Imaginary Realm",
    "The Romantic Journey",
    "The Shadow of Evil"
  ]
  public tvSeriesTitles = [
    "A Page In Time ",
    "The Noir Nights",
    "Together Forever",
    "The Unwritten Pages",
    "The Laugh Riot"
  ]
  public slides: {src: string, title: string}[] = [];
  public actualIndex = 0;
  public faChevronRight = faChevronRight;
  public faChevronLeft = faChevronLeft;

  public constructor() {
    this.getSlides()
  }

  private getSlides() {
    for (let i = 0; i < 3; i++) {
      const movieSlideIndex = Math.floor(Math.random() * (this.movieSlides.length - 1))
      const tvSeriesSlideIndex = Math.floor(Math.random() * (this.tvSeriesSlides.length - 1))
      const movieTitlesIndex = Math.floor(Math.random() * (this.movieTitles.length - 1))
      const tvSeriesTitlesIndex = Math.floor(Math.random() * (this.tvSeriesTitles.length - 1))
      this.slides.push({ src: this.movieSlides[movieSlideIndex], title: this.movieTitles[movieTitlesIndex] })
      this.slides.push({ src: this.tvSeriesSlides[tvSeriesSlideIndex], title: this.tvSeriesTitles[tvSeriesTitlesIndex] })
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
