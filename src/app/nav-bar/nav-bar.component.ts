import { Component } from '@angular/core';
import { faUser, faHome, faSearch, faPlus, faStar, faFilm, faTelevision } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  faUser = faUser;
  faHome =  faHome;
  faSearch =  faSearch;
  faPlus =  faPlus;
  faStar =  faStar;
  faFilm =  faFilm;
  faTelevision =  faTelevision;
}
