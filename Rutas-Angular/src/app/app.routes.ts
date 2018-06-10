import {Router, Routes} from '@angular/router';
import {RutaInicioComponent} from './misComponentes/ruta-inicio/ruta-inicio.component';
import {RutaNoEncontradaComponent} from './misComponentes/ruta-no-encontrada/ruta-no-encontrada.component';
import {RutaFAQComponent} from './misComponentes/ruta-faq/ruta-faq.component';

export const RUTAS_APP: Routes = [
  {
    path: 'inicio/hola/como/estas',
    component: RutaInicioComponent
  },
  {
    path: 'faq',
    component: RutaFAQComponent
  },
  {
    path: '',
    redirectTo: 'inicio/hola/como/estas',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: RutaNoEncontradaComponent
  }
];
