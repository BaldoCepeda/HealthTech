import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-additives-info',
  templateUrl: './additives-info.page.html',
  styleUrls: ['./additives-info.page.scss'],
})
export class AdditivesInfoPage implements OnInit {

  constructor() { }
  title_additive = "E-100 Curcumina";
  Type = "Colorante";
  Origin = "Vegetal";
  Use = "Colorante que varía del amarillo al rojo dependiendo del PH (acidez). De origen natural, Constituye una parte del curry. Es un extracto de cúrcuma, rizoma procedente de la India. Se parece al jengibre, incluso en el olor. Su sabor es algo amargo. Se obtiene también químicamente mediante síntesis. Se emplea en mantequillas, quesos, leche, mostazas, té y productos de pasteleria.";
  Effects = "No se conocen sus efectos secundarios ya que este colorante no suele absorberse en el intestino";
  Toxicity = "INOFENSIVO";

  title_additive_2 = "E-102 Tartracina";
  Type_2 = "Colorante";
  Origin_2 = "Artificial";
  Use_2 = "Colorante amarillo. De origen sintético. Pertenece al grupo de los azoicos. Se emplea en productos de pasteleria y pescados. Normalmente se usa en chicles, refrescos, caramelos, salsas, zumos, bizcochos y alimentos de conserva como colorante amarillo.";
  Effects_2 = "Puede producir asma, rintis, alergias, eczemas, hiperactividad, problemas de vision e insomnio. Puede producir alergias en algunas peronas sensibles a la aspirina (asma, urticaria, rintis, manchas azules, vision borrosa). En los niños puede producir migrañas, insomnio e hiperactividad. Podria ser cancerígeno, con efectos mutágenos y teratógenos. Prohibido en Austria, Finlandia y Noruega";
  Toxicity_2 = "PELIGROSO";
  ngOnInit() {
  }

}
