import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unique-additives',
  templateUrl: './unique-additives.page.html',
  styleUrls: ['./unique-additives.page.scss'],
})
export class UniqueAdditivesPage implements OnInit {
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
  constructor(private router: Router) {
    this.items.push({
      title: 'Ciclamato',
      code: 'E-952',
      state: 'PELIGROSO',
      icon: this.icons[Math.floor(Math.random() * this.icons.length)],
      color: 'red_adi'
    });
    this.items.push({
      title: 'Aspartamo',
      code: 'E-951',
      state: 'PELIGROSO',
      icon: this.icons[Math.floor(Math.random() * this.icons.length)],
      color: 'red_adi'
    });
    this.items.push({
      title: 'Acesulfamo K',
      code: 'E-950',
      state: 'PELIGROSO',
      icon: this.icons[Math.floor(Math.random() * this.icons.length)],
      color: 'red_adi'
    });
    this.items.push({
      title: 'Benzoato sódico',
      code: 'E-211',
      state: 'PELIGROSO',
      icon: this.icons[Math.floor(Math.random() * this.icons.length)],
      color: 'red_adi'
    });
    this.items.push({
      title: 'Caramelo Sulfito de Amoniaco',
      code: 'E-150D',
      state: 'PRECAUCION',
      icon: this.icons[Math.floor(Math.random() * this.icons.length)],
      color: 'yellow_adi'
    });
    this.items.push({
      title: 'Ácido Cítrico',
      code: 'E-330',
      state: 'INOFENSIVO',
      icon: this.icons[Math.floor(Math.random() * this.icons.length)],
      color: 'green_adi'
    });
    this.items.push({
      title: 'Ácido fosfórico',
      code: 'E-338',
      state: 'PRECAUCION',
      icon: this.icons[Math.floor(Math.random() * this.icons.length)],
      color: 'yellow_adi'
    });
  }
  ngOnInit() {
  }

  displayDetail = (code: string) =>{
    this.router.navigate(['/additives-info']);
  }

}
