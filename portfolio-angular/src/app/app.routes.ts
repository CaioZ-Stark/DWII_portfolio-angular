import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Sobre } from './sobre/sobre';
import { Projetos } from './projetos/projetos';
import { Contat } from './contat/contat';
import { Catalogo } from './catalogo/catalogo';
import { Gestao } from './gestao/gestao';
import { Login } from './login/login';

import { authGuard } from './auth.guard';

export const routes: Routes = [

  // Login fica livre, sem o guard
  { path: 'login', component: Login },

  // Todas essas páginas precisam de login
  { path: '', component: Home, canActivate: [authGuard] },
  { path: 'sobre', component: Sobre, canActivate: [authGuard] },
  { path: 'projetos', component: Projetos, canActivate: [authGuard] },
  { path: 'contat', component: Contat, canActivate: [authGuard] },
  { path: 'catalogo', component: Catalogo, canActivate: [authGuard] },
  { path: 'gestao', component: Gestao, canActivate: [authGuard] },

  // Qualquer endereço inexistente vai para o login
  { path: '**', redirectTo: 'login' }

];