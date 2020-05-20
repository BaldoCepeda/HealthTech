import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  dietas: any[];

  constructor(private http: HttpClient, private router: Router) { 
    this.http.get('assets/dietas.json').subscribe(res => {
      this.dietas = res['items'];

      this.dietas[0].open = true;
    })
  }
  // shown = false;
  // groups = [
  //   {name: "Dieta para aumentar masa muscular",Comidas:["Desayuno", "Comida", "Cena"]},
  //   {name: "Dieta para bajar de peso",Comidas:["Desayuno", "Comida", "Cena"]},
  //   {name: "Dieta para mantener tu figura",Comidas:["Desayuno", "Comida", "Cena"]},
  //   {name: "Dieta para una piel sana",Comidas:["Desayuno", "Comida", "Cena"]},
  // ];
  toggleSection(index){
    this.dietas[index].open = !this.dietas[index].open;
  }
  toggleItem(index, childrenIndex){
    // this.dietas[index].children[childrenIndex].open = !this.dietas[index].children[childrenIndex].open
    this.router.navigate(['/diets-detail']);
  }
  
}
