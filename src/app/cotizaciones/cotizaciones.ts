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
    whatsappNumber = '573148267848';
  
    whatsappMessage = 'Hola, me gustaría solicitar una cotización gratuita para mi proyecto de construcción.';
  
    
    get whatsappLink() {
      const encodedMessage = encodeURIComponent(this.whatsappMessage);
      return `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
    }

    openWhatsApp() {
      window.open(this.whatsappLink, '_blank');
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
