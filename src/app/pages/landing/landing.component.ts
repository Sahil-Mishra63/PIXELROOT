import { Component, AfterViewInit, OnInit, ViewChild, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements AfterViewInit {

  @ViewChild('contactFormElement') contactFormElement!: ElementRef<HTMLFormElement>;

  ngAfterViewInit(){
      gsap.from(".hero-title", {y:30, opacity:0, duration:0.8});
      gsap.from(".hero-sub", { y: 15, opacity: 0, duration: 0.8, delay: 0.15 });

      const btn = document.querySelector('.cta-btn')!;
      const popup = document.getElementById('contactPopup')!;

      // btn.addEventListener('click', () => {
      //   popup.style.display = 'block';
      // });
  }

  openPopup(){
    const popup =  document.getElementById('contactPopup')!;
    popup.style.display = 'block';
  }

  closePopup(){
    const popup =  document.getElementById('contactPopup')!;
    popup.style.display = 'none';
  }

  email = 'pixelroot.business@gmail.com';

  //Emailjs setup
  sendEmail(form: NgForm){
    if(form.invalid) return;

    emailjs.sendForm(
      'service_6j7zb6q',
      'template_p0390rf',
      this.contactFormElement.nativeElement,
      'IpUHwSzF-bYyRcWZI'
    ).then(
      (result: EmailJSResponseStatus) => {
        console.log(result.text);
        alert("Project request sent! We will contact you soon.");
        form.reset();
      },
      (error) => {
        console.error('FAILED...', error);
        alert('Oops, something went wrong...');
      }
    )
  }
 

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
