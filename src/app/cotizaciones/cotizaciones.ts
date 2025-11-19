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

  plans = [
    {
      title: 'Plan 1',
      items: [
        'EPS Y ARL',
        'Aplica para:',
        'Mujeres mayores de 57 años y hombres mayores de 62 años.',
        'Extranjeros no obligados a cotizar pensión en Colombia'
      ]
    },
    {
      title: 'Plan 2',
      items: [
        'SALUD, PENSION Y ARL ',
        'Aplica para: ',
        'Independientes,  contratistas y voluntarios.(OPS)',
        'Nivel 1,2,3,4 y 5'
      ]
    },
    {
      title: 'Plan 3',
      items: [
        'SALUD, PENSION, ARL, CAJA DE COMPENSACION FAMILIAR Y SESANTIAS',
        'Aplica para: ',
        'Empleados y empresas'
      ]
    }
  ];


}
