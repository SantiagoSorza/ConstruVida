import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-cotizaciones',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './cotizaciones.html',
})
export class Cotizaciones {
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
