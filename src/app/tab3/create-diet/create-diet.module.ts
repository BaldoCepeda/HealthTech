import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CreateDietPage } from './create-diet.page';

const routes: Routes = [
  {
    path: '',
    component: CreateDietPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: CreateDietPage }])
  ],
  declarations: [CreateDietPage]
})
export class CreateDietPageModule {}
