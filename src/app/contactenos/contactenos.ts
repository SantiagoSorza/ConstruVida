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
  
    whatsappMessage = 'Hola, Quisiera solicitar una cotización y saber las opciones que manejan.';
  
    
    get whatsappLink() {
      const encodedMessage = encodeURIComponent(this.whatsappMessage);
      return `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
    }

    openWhatsApp() {
      window.open(this.whatsappLink, '_blank');
    }
    
    // Email contact details and helper
    emailAddress = 'contacto@construvida.com';
    emailSubject = 'Solicitud de cotización - ConstruVida';
    emailBody = 'Hola, me interesa recibir información y una cotización. Mi nombre es: [tu nombre]';

    get mailtoLink() {
      const subject = encodeURIComponent(this.emailSubject);
      const body = encodeURIComponent(this.emailBody);
      return `mailto:${this.emailAddress}?subject=${subject}&body=${body}`;
    }

    openEmail() {
      window.location.href = this.mailtoLink;
    }

    get gmailLink() {
      const to = encodeURIComponent(this.emailAddress);
      const subject = encodeURIComponent(this.emailSubject);
      const body = encodeURIComponent(this.emailBody);
      return `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
    }
    
}
