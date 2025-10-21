import { Component, AfterViewInit, OnInit, ViewChild, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss'
})
export class WorksComponent {

email = "pixelroot.business@gmail.com"

scrollTo(event: Event, sectionId: string) {
  event.preventDefault(); // prevent default jump
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
  projects = [
  {
    title: 'DineEase',
    description: 'A QR based contactless restaurant ordering App built with Angular.',
    images: [
      'assets/images/dinease1.png',
      'assets/images/dinease2.png',
      'assets/images/dinease3.png',
      'assets/images/dinease4.png'
    ],
    route: '/dineease'
  },
  {
    title: 'TechArcade',
    description: 'An Online Technical Game platform.',
    images: [
      'assets/images/Ta2.png',
      'assets/images/Ta1.png',
      'assets/images/Ta5.png',
      'assets/images/Ta4.png',
      'assets/images/Ta3.png'
    ],
    route: '/techarcade'
  },
  {
    title: 'ProBuild',
    description: 'A Resume Builder + Email generator tool built using Angular.',
    images: [
      'assets/images/pb3.png',
      'assets/images/pb1.png',
      'assets/images/pb3.png',
      'assets/images/pb2.png',
      'assets/images/pb4.png'
    ],
    route: '/probuild'
  }
];
}
