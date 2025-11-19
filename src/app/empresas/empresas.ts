import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-empresas',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './empresas.html',
})
export class Empresas {
  companies = [
    { id: 1, name: 'Construcciones del Norte S.A.S', specialty: 'Construcción Residencial',
      description: 'Empresa líder en proyectos residenciales de alta gama. Más de 25 años de experiencia en el sector.' },

    { id: 2, name: 'Ingeniería y Obras Civiles', specialty: 'Obras Civiles',
      description: 'Especialistas en infraestructura vial, puentes y obras de gran envergadura. Certificación ISO 9001.' },

    { id: 3, name: 'Arquitectura Moderna Ltda', specialty: 'Diseño y Construcción',
      description: 'Fusionamos diseño arquitectónico innovador con construcción de calidad superior.' },

    { id: 4, name: 'Constructora Industrial Pro', specialty: 'Construcción Industrial',
      description: 'Proyectos industriales y bodegas logísticas. Expertos en estructuras metálicas y grandes espacios.' },

    { id: 5, name: 'Edificaciones Comerciales', specialty: 'Centros Comerciales',
      description: 'Construcción de espacios comerciales, oficinas corporativas y edificios multifamiliares.' },

    { id: 6, name: 'Remodelaciones Premium', specialty: 'Remodelación y Acabados',
      description: 'Especialistas en remodelación integral de viviendas y locales comerciales con acabados de lujo.' },
  ];
}
