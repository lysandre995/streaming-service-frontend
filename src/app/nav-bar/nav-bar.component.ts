import { Component } from '@angular/core';
import { faUser } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  faUser = faUser;
}
