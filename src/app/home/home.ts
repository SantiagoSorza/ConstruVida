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
  insurancePackages = [
  {
    icon: '⚡',
    title: 'Basic Coverage',
    description: 'Essential protection for your peace of mind at an affordable price.',
    
  },
  {
    icon: '🏅',
    title: 'Standard Coverage',
    description: 'A balanced plan offering enhanced protection and value.',
    
  },
  {
    icon: '👑',
    title: 'Premium Coverage',
    description: 'Comprehensive coverage with exclusive benefits for total security.',
   
  },
  {
    icon: '🧩',
    title: 'Custom Coverage',
    description: 'Build your own plan—choose the features that matter most to you!',
    
  }
];

}

