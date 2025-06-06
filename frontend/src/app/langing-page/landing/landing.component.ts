import { Component } from '@angular/core';
import { MainPageComponent } from "../main/main-page.component";
import { NavBarComponent } from '../../shared/nav/nav-bar.component';

@Component({
  selector: 'app-landing',
  imports: [MainPageComponent, NavBarComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
