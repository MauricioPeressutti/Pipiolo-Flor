import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ReglasComponent } from './pages/reglas/reglas.component';

const routes: Routes = [
  // {
  //   path: 'register',
  //   component: RegisterComponent,
  // },
  // {
  //   path: 'forgot-password',
  //   component: ForgotPasswordComponent
  // },
  // {
  //   path: 'password-reset',
  //   component: PasswordResetComponent
  // },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'reglas',
    component: ReglasComponent
  },
  // {
  //   path: 'password-reset/:encryptedUser',
  //   component: PasswordResetComponent
  // },
  // {
  //   path: 'home-login',
  //   component: HomeLoginComponent
  // },
  // {
  //   path: 'education-centers',
  //   component: EducationCentersComponent
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent,

  // },
  // {
  //   path: 'assistance',
  //   loadChildren: () => import('./pages/assistance/assistance.module').then(m => m.AssistanceModule),
  // },
  // {
  //   path: 'incident',
  //   loadChildren: () => import('./pages/incident/incident.module').then(m => m.IncidentModule),
  // },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
