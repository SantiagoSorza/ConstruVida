import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-cotizaciones',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './cotizaciones.html',
})
export class Cotizaciones implements OnInit {
  // pagination state for responsive mobile view
  currentPage = 0;
  itemsPerPage = 3; // default: show all/3 on desktop

  get totalPages() {
    return Math.max(1, Math.ceil(this.plans.length / this.itemsPerPage));
  }

  get pages() {
    return new Array(this.totalPages);
  }

  pagedPlans() {
    const start = this.currentPage * this.itemsPerPage;
    return this.plans.slice(start, start + this.itemsPerPage);
  }

  resizeHandler = () => {
    const w = window.innerWidth;
    // mobile/tablet threshold: show 1 per page for <= 768px
    if (w <= 768) {
      this.itemsPerPage = 1;
    } else {
      this.itemsPerPage = 3; // show all 3 plans (or up to 3) on larger screens
    }
    // ensure currentPage is valid
    if (this.currentPage >= this.totalPages) this.currentPage = this.totalPages - 1;
  };
  ngOnInit() {
    // Scroll to top when component loads
    window.scrollTo(0, 0);
    // initialize pagination based on viewport
    this.resizeHandler();
    window.addEventListener('resize', this.resizeHandler);
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.resizeHandler);
  }

  whatsappNumber = '573189412003';

  whatsappMessage = 'Hola, me gustaría solicitar una cotización.';
  whatsappMessagePlan = 'Hola, me gustaría ver los planes que tienen disponibles.';


  get whatsappLink() {
    const encodedMessage = encodeURIComponent(this.whatsappMessage);
    return `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
  }
  get whatsappLinkPlan() {
    const encodedMessage = encodeURIComponent(this.whatsappMessagePlan);
    return `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
  }

  openWhatsApp() {
    window.open(this.whatsappLink, '_blank');
  }

  getPlanWhatsAppLink(plan: { title: string; items?: string[] }) {
    const firstItem = plan.items && plan.items.length ? plan.items[0] : '';
    const message = firstItem
      ? `Hola, quiero información y cotización para el plan: ${plan.title}  ${firstItem}`
      : `Hola, quiero información y cotización para el plan: ${plan.title}`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) this.currentPage += 1;
  }

  prevPage() {
    if (this.currentPage > 0) this.currentPage -= 1;
  }

  goToPage(i: number) {
    if (i >= 0 && i < this.totalPages) this.currentPage = i;
  }

  plans = [
    {
      title: 'Plan 1',
      items: [
        'EPS Y ARL',
        'Aplica para:',
        '✅ Mujeres mayores de 57 años y hombres mayores de 62 años.',
        '✅ Extranjeros no obligados a cotizar pensión en Colombia'
      ]
    },
    {
      title: 'Plan 2',
      items: [
        'SALUD, PENSION, ARL, CAJA DE COMPENSACION FAMILIAR Y SESANTIAS',
        'Aplica para: ',
        '✅ Empleados y empresas'
      ]
    },
    {
      title: 'Plan 3',
      items: [
        'SALUD, PENSION Y ARL ',
        'Aplica para: ',
        '✅ Independientes,  contratistas y voluntarios.(OPS)',
        '✅ Nivel 1,2,3,4 y 5'
      ]
    }
  ];
}
