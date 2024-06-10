import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { authGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'meeting',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./feature/feature.module').then((m) => m.FeatureModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
