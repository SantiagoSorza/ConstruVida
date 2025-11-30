import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './home.html',
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    // Scroll to top when component loads
    window.scrollTo(0, 0);
  }

  whatsappNumber = '573189412003';

  whatsappMessage = 'Hola, me gustaría tener mas informacion sobre las EPS, ARL y pensiones que manejan.';
  whatsappMessageAsis = 'Hola, Quisiera solicitar una cotización y saber las opciones que manejan.';

  get whatsappLink() {
    const encodedMessage = encodeURIComponent(this.whatsappMessage);
    return `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
  }
  get whatsappLinkAsis() {
    const encodedMessage = encodeURIComponent(this.whatsappMessageAsis);
    return `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
  }
  openWhatsApp() {
    window.open(this.whatsappLink, '_blank');
  }


}

