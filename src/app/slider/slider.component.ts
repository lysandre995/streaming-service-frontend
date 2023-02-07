import { Component } from '@angular/core';
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  public slides = [
    '/assets/images/movies/nightmares_unfold.png',
    '/assets/images/movies/the_bounty_hunters.png',
    '/assets/images/movies/the_imaginary_realm.png',
    '/assets/images/movies/the_romantic_journey.png',
    '/assets/images/movies/the_shadow_of_evil.png',
    "/assets/images/tv-series/a_page_in_time.png",
    "/assets/images/tv-series/the_noir_nights.png",
    "/assets/images/tv-series/the_laugh_riot.png",
    "/assets/images/tv-series/the_unwritten_pages.png",
    "/assets/images/tv-series/together_forever.png"
  ];
  public numberOfClicks = 0;
  public scrollDelta = 0;
  public faChevronRight = faChevronRight;
  public faChevronLeft = faChevronLeft;

  public onRightArrowClicked() {
    if (this.numberOfClicks < 7) {
      this.numberOfClicks++;
    }
    const slidePictureContainer = document.querySelector('.slide-picture-container');
    console.log(slidePictureContainer);
    slidePictureContainer?.scroll({left: 500 * this.numberOfClicks})
  }

  public onLeftArrowClicked() {
    if (this.numberOfClicks > 0) {
      this.numberOfClicks--;
    }
    const slidePictureContainer = document.querySelector('.slide-picture-container');
    console.log(slidePictureContainer);
    slidePictureContainer?.scroll({left: 500 * this.numberOfClicks})
  }
}
