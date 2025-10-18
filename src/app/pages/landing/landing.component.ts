import { Component, AfterViewInit, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements AfterViewInit {

  ngAfterViewInit(){
      gsap.from(".hero-title", {y:30, opacity:0, duration:0.8});
      gsap.from(".hero-sub", { y: 15, opacity: 0, duration: 0.8, delay: 0.15 });

      const btn = document.querySelector('.cta-btn')!;
      const popup = document.getElementById('contactPopup')!;

      btn.addEventListener('click', () => {
        popup.style.display = 'block';
      });
  }

  email = 'pixelroot.business@gmail.com';

  projects = [
  {
    title: 'DineEase',
    description: 'A QR based contactless restaurant ordering App built with Angular.',
    images: [
      'assets/images/dinease1.png',
      'assets/images/dinease2.png',
      'assets/images/dinease3.png',
      'assets/images/dinease4.png'
    ]
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
    ]
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
    ]
  }
];

  
  //Emailjs setup
  sendEmail(form: NgForm){
    if(form.invalid) return;

    emailjs.sendForm(
      'service_6j7zb6q',
      'template_p0390rf',
      form.form as unknown as HTMLFormElement,
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
 
  closePopup() {
      const popup = document.getElementById('contactPopup')!;
      popup.style.display = 'none';
  }

  scrollTo(event: Event, sectionId: string) {
  event.preventDefault(); // prevent default jump
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}


}
