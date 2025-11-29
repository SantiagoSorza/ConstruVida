import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-contactenos',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './contactenos.html',
})
export class Contactenos {
    whatsappNumber = '573189412003';
  
    whatsappMessage = 'Hola, me gustaría .';
  
    
    get whatsappLink() {
      const encodedMessage = encodeURIComponent(this.whatsappMessage);
      return `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
    }

    openWhatsApp() {
      window.open(this.whatsappLink, '_blank');
    }
    
}
