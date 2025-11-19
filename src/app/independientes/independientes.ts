import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './independientes.html',
})
export class Independientes {

  epsList = [
    { image: "assets/img/eps/nueva_eps.png",
      title: 'Nueva EPS'
    },
    { image: 'assets/img/eps/saludTotaleps.png', 
      title: 'SaludTotal EPS-S'
    },
    { image: 'assets/img/eps/EPS_Sanitas.png',
      title: 'EPS Sanitas'
     },
    { image: 'assets/img/eps/sura.png' ,
      title: 'EPS SURA'
    },
    { image: 'assets/img/eps/coosalud.png',
      title: 'Coosalud EPS',
     },
    { image: 'assets/img/eps/compensar.png',
      title: 'Compensar EPS',
     },
    { image: 'assets/img/eps/mutualser.png',
      title: 'Mutualser EPS',
     },
    { image: 'assets/img/eps/capitalsalud.png',
      title: 'Capitalsalud EPS-S',
     },
    { image: 'assets/img/eps/capresoca.png',
      title: 'Capresoca EPS',
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
    { title: 'Protección', image: 'assets/pensiones/proteccion.png' },
    { title: 'Porvenir', image: 'assets/pensiones/porvenir.png' },
    { title: 'Colpensiones', image: 'assets/pensiones/colpensiones.png' }
  ];

  currentPageP = 1;
  itemsPerPageP = 3;

  get paginatedCardsP() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.pensionesList.slice(start, end);
  }

  nextPageP() {
    if (this.currentPage * this.itemsPerPage < this.pensionesList.length) {
      this.currentPage++;
    }
  }

  prevPageP() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToPageP(page: number) {
    this.currentPage = page;
  }

  get totalPagesP() {
    return Math.ceil(this.pensionesList.length / this.itemsPerPage);
  }

  get pagesP() {
    return Array.from({length: this.totalPages}, (_, i) => i + 1);
  }


  requisitos = [
    'Cédula de ciudadanía o extranjería.',
    'No estar registrado como beneficiario en otra EPS.',
    'Tener un ingreso declarado para cotizar.',
    'Registrarse como independiente en la plataforma.'
  ];

}
