import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AboutComponent } from './domain/about/about.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'user',
    children: [
      {
        path: '',
        loadComponent: () => import('./user/user-dashboard/user-dashboard.component').then(c => c.UserDashboardComponent),
      }
    ],
    canActivateChild: [authGuard]
  }
];
