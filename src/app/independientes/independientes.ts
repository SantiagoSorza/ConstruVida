import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header';
import { FooterComponent } from '../footer/footer';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, RouterLink],
  templateUrl: './independientes.html',
})
export class Independientes {
     whatsappNumber = '573148267848';
  
    whatsappMessage = 'Hola, me gustaría solicitar una cotización gratuita para mi proyecto de construcción.';
  
    
    get whatsappLink() {
      const encodedMessage = encodeURIComponent(this.whatsappMessage);
      return `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
    }

    openWhatsApp() {
      window.open(this.whatsappLink, '_blank');
    }

  epsList = [
    { image: "assets/img/eps/nueva_eps.png",
      title: 'Nueva EPS',
      url: 'https://www.nuevaeps.com.co/'
    },
    { image: 'assets/img/eps/saludTotaleps.png', 
      title: 'SaludTotal EPS-S',
      url: 'https://www.saludtotal.com.co/'
    },
    { image: 'assets/img/eps/EPS_Sanitas.png',
      title: 'EPS Sanitas',
      url: 'https://www.epssanitas.com/'
     },
    { image: 'assets/img/eps/sura.png' ,
      title: 'EPS SURA',
      url: 'https://www.epssura.com/'
    },
    { image: 'assets/img/eps/coosalud.png',
      title: 'Coosalud EPS',
      url: 'https://coosalud.com/'
     },
    { image: 'assets/img/eps/compensar.png',
      title: 'Compensar EPS',
      url: 'https://corporativo.compensar.com/salud/compensar-salud/inicio'
     },
    { image: 'assets/img/eps/mutualser.png',
      title: 'Mutualser EPS',
      url: 'https://www.mutualser.com/'
     },
    { image: 'assets/img/eps/capitalsalud.png',
      title: 'Capitalsalud EPS-S',
      url: 'https://www.capitalsalud.gov.co/'
     },
    { image: 'assets/img/eps/capresoca.png',
      title: 'Capresoca EPS',
      url: 'https://www.capresoca-casanare.gov.co/'
     }

  ];
  currentPage = 1;
  itemsPerPage = 3;

  get paginatedCards() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.epsList.slice(start, end);
  }

  nextPage() {
    if (this.currentPage * this.itemsPerPage < this.epsList.length) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  get totalPages() {
    return Math.ceil(this.epsList.length / this.itemsPerPage);
  }

  get pages() {
    return Array.from({length: this.totalPages}, (_, i) => i + 1);
  }



  pensionesList = [
    { title: 'Protección', 
      image: 'assets/img/pensiones/proteccion.jpg',
      url: 'https://www.proteccion.com/'
    },
    { title: 'Porvenir',
      image: 'assets/img/pensiones/porvenir.webp',
      url: 'https://www.porvenir.com/'},
    { title: 'Colpensiones', 
      image: 'assets/img/pensiones/colpensiones.webp',
      url: 'https://www.colpensiones.gov.co/'
    },
    { title: 'Oldmutual', 
      image: 'assets/img/pensiones/oldmutual.png',
      url: 'https://www.oldmutual.co.za/'
    },
    { title: 'Colfondos', 
      image: 'assets/img/pensiones/colfondos.png,',
      url: 'https://www.colfondos.com.co/'}
  ];

  currentPageP = 1;
  itemsPerPageP = 3;

  get paginatedCardsP() {
    const start = (this.currentPageP - 1) * this. itemsPerPageP;
    const end = start + this.itemsPerPageP;
    return this.pensionesList.slice(start, end);
  }

  nextPageP() {
    if (this.currentPageP * this.itemsPerPageP < this.pensionesList.length) {
      this.currentPageP++;
    }
  }

  prevPageP() {
    if (this.currentPageP > 1) {
      this.currentPageP--;
    }
  }

  goToPageP(pageP: number) {
    this.currentPageP = pageP;
  }

  get totalPagesP() {
    return Math.ceil(this.pensionesList.length / this.itemsPerPageP);
  }

  get pagesP() {
    return Array.from({length: this.totalPagesP}, (_, i) => i + 1);
  }


  requisitos = [
    'Definir qué tipo de afiliación necesita la persona: dependiente, independiente o independiente por OPS.',
    'Cédula del cotizante (obligatoria en todos los casos).',
    'Para inclusión de beneficiarios: Cónyuge, anexar la cédula del cónyuge.',
    'Hijos de 0 a 7 años: registro civil.',
    'Hijos de 7 a 18 años: tarjeta de identidad y registro civil.',
    'Mayores de 18 años: cédula del beneficiario y registro civil.',
    'En todos los casos donde se incluyan beneficiarios, también debe adjuntarse la cédula del cotizante.',
    'Si la persona es independiente por OPS y requiere afiliación a la ARL, debe anexar el contrato por prestación de servicios.'
  ];

}
