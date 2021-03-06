import {Router, Routes} from '@angular/router';
import {RutaInicioComponent} from './misComponentes/ruta-inicio/ruta-inicio.component';
import {RutaNoEncontradaComponent} from './misComponentes/ruta-no-encontrada/ruta-no-encontrada.component';
import {RutaFAQComponent} from './misComponentes/ruta-faq/ruta-faq.component';
import {RutaIniUsuarioComponent} from './misComponentes/ruta-ini-usuario/ruta-ini-usuario.component';
import {RutaIniPermisosComponent} from './misComponentes/ruta-ini-permisos/ruta-ini-permisos.component';

export const RUTAS_APP: Routes = [
  {
    path: 'inicio/hola/como/estas',
    component: RutaInicioComponent,
    children: [
      {
        path: 'usuario/:id/activo/:estaActivo',
        component: RutaIniUsuarioComponent
      },
      {
        path: 'permisos',
        component: RutaIniPermisosComponent
      },
      {
        path: '',
        redirectTo: 'usuario/1/activo/true',
        pathMatch: 'full'
      }
    ]
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
