import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)//, canActivate: [AuthService]
  },
  { path: 'additives-info', loadChildren: './pages/additives-info/additives-info.module#AdditivesInfoPageModule' },
  { path: 'diets-detail', loadChildren: './pages/diets-detail/diets-detail.module#DietsDetailPageModule' },
  { path: 'unique-additives', loadChildren: './pages/unique-additives/unique-additives.module#UniqueAdditivesPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
