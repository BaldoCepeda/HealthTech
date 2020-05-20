import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdditivesInfoPage } from './additives-info.page';

const routes: Routes = [
  {
    path: '',
    component: AdditivesInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdditivesInfoPage]
})
export class AdditivesInfoPageModule {}
