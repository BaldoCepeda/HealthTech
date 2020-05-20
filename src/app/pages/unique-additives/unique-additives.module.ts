import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UniqueAdditivesPage } from './unique-additives.page';

const routes: Routes = [
  {
    path: '',
    component: UniqueAdditivesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UniqueAdditivesPage]
})
export class UniqueAdditivesPageModule {}
