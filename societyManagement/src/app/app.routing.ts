import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

//Layouts
import { FullLayoutComponent } from './full-layout/full-layout.component';

export const routes: Routes = [
 {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },{
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },{
    path: 'registration',
    loadChildren: './register/register.module#RegisterModule'
  }, {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(router: Router) {
  }
}
