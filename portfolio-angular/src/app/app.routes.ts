import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Sobre } from './sobre/sobre';
import { Projetos } from './projetos/projetos';
import { Contat } from './contat/contat';
import { Catalogo } from './catalogo/catalogo';
export const routes: Routes = [
    { path: '', component: Home},
    { path: 'sobre', component: Sobre},
    { path: 'projetos', component: Projetos},
    { path: 'contat', component: Contat},
    { path: 'catalogo', component: Catalogo},
];
