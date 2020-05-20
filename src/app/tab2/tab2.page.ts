import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; code: string; state: string; icon: string; color: string }> = [];
  constructor(private router : Router) {
    this.items.push({
      title: 'Curcumina',
      code: 'E-100',
      state: 'INOFENSIVO',
      icon: this.icons[Math.floor(Math.random() * this.icons.length)],
      color: 'green_adi'
    });
    this.items.push({
      title: 'Riboflavina',
      code: 'E-101',
      state: 'INOFENSIVO',
      icon: this.icons[Math.floor(Math.random() * this.icons.length)],
      color: 'green_adi'
    });
    this.items.push({
      title: 'Tartracina',
      code: 'E-102',
      state: 'PELIGROSO',
      icon: this.icons[Math.floor(Math.random() * this.icons.length)],
      color: 'red_adi'
    });
    this.items.push({
      title: 'Crisoína S',
      code: 'E-103',
      state: 'PELIGROSO',
      icon: this.icons[Math.floor(Math.random() * this.icons.length)],
      color: 'red_adi'
    });
    this.items.push({
      title: 'Amarillo de quinoleína',
      code: 'E-104',
      state: 'PELIGROSO',
      icon: this.icons[Math.floor(Math.random() * this.icons.length)],
      color: 'red_adi'
    });
    this.items.push({
      title: 'Amarillo sólido',
      code: 'E-105',
      state: 'PRECAUCIÓN',
      icon: this.icons[Math.floor(Math.random() * this.icons.length)],
      color: 'yellow_adi'
    });
    this.items.push({
      title: 'Fosfato de Lactoflavina',
      code: 'E-106',
      state: 'INOFENSIVO',
      icon: this.icons[Math.floor(Math.random() * this.icons.length)],
      color: 'green_adi'
    });
    this.items.push({
      title: 'Amarillo 2G',
      code: 'E-107',
      state: 'PELIGROSO',
      icon: this.icons[Math.floor(Math.random() * this.icons.length)],
      color: 'red_adi'
    });
    this.items.push({
      title: 'Amarillo ocaso FCF',
      code: 'E-110',
      state: 'PELIGROSO',
      icon: this.icons[Math.floor(Math.random() * this.icons.length)],
      color: 'red_adi'
    });
    this.items.push({
      title: 'Naranja GN',
      code: 'E-111',
      state: 'PELIGROSO',
      icon: this.icons[Math.floor(Math.random() * this.icons.length)],
      color: 'red_adi'
    });
    this.items.push({
      title: 'Cochinilla',
      code: 'E-120',
      state: 'PELIGROSO',
      icon: this.icons[Math.floor(Math.random() * this.icons.length)],
      color: 'red_adi'
    });
    this.items.push({
      title: 'Orcilla',
      code: 'E-121',
      state: 'PELIGROSO',
      icon: this.icons[Math.floor(Math.random() * this.icons.length)],
      color: 'red_adi'
    });
  }

  ngOnInit() {
  }
  displayDetail = (code: string) =>{
    this.router.navigate(['/additives-info']);
  }
}
