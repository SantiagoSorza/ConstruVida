import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './nosotros.html',
})
export class Nosotros implements OnInit {
  ngOnInit() {
    // Scroll to top when component loads
    window.scrollTo(0, 0);
  }
}