import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './home.html',
})
export class HomeComponent {
    whatsappNumber = '573189412003';
  
    whatsappMessage = 'Hola, me gustaría solicitar una cotización gratuita para mi proyecto de construcción.';
  
    
    get whatsappLink() {
      const encodedMessage = encodeURIComponent(this.whatsappMessage);
      return `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
    }

    openWhatsApp() {
      window.open(this.whatsappLink, '_blank');
    }


}

