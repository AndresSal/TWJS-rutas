import {Router, Routes} from '@angular/router';
import {RutaInicioComponent} from './misComponentes/ruta-inicio/ruta-inicio.component';
import {RutaNoEncontradaComponent} from './misComponentes/ruta-no-encontrada/ruta-no-encontrada.component';

export const RUTAS_APP: Routes = [
  {
    path: 'inicio',
    component: RutaInicioComponent
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: RutaNoEncontradaComponent
  }
];
