import { Component } from '@angular/core';
import { GenreEnum } from "./enums/genre-enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'streaming-service-frontend';

  public get GenreEnum(): typeof GenreEnum {
    return GenreEnum;
  }
}
