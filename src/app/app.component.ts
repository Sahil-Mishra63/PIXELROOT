import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingComponent } from "./pages/landing/landing.component";
import { OnInit } from '@angular/core';
import * as AOS from 'aos';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'PIXELROOT';

  ngOnInit() {
    AOS.init({
      duration: 1200, //animation duration
      once: false, //whether animation should happen only once - while scrolling down
    });
  }
}
