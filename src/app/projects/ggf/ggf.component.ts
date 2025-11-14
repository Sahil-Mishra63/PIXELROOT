import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-ggf',
  standalone: true,
  imports: [],
  templateUrl: './ggf.component.html',
  styleUrl: './ggf.component.scss'
})
export class GgfComponent implements AfterViewInit {

  @ViewChild('title1') title1!: ElementRef;
  @ViewChild('title2') title2!: ElementRef;
  @ViewChild('title3') title3!: ElementRef;

  ngAfterViewInit() {

    const tl = gsap.timeline();

    // Energetic POP + bounce for Title 1
    tl.from(this.title1.nativeElement, {
      scale: 0.3,
      opacity: 0,
      y: -100,
      rotation: -10,
      duration: 1,
      ease: "back.out(2)"
    })

    // Slide from right + bounce for Title 2
    .from(this.title2.nativeElement, {
      x: 200,
      opacity: 0,
      duration: 0.9,
      ease: "bounce.out"
    }, "-=0.3")

    // Energetic shake + pop for Title 3
    .from(this.title3.nativeElement, {
      scale: 0.5,
      opacity: 0,
      rotation: 10,
      duration: 0.9,
      ease: "elastic.out(1, 0.4)"
    }, "-=0.2");
  }
}
