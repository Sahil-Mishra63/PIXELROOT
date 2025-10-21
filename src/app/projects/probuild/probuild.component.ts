import { Component, AfterViewInit, OnInit, ViewChild, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-probuild',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './probuild.component.html',
  styleUrl: './probuild.component.scss'
})
export class ProbuildComponent implements OnInit {


  ngOnInit() {
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

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


}
