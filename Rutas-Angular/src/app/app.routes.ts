import {Router, Routes} from '@angular/router';

export const RUTAS_APP: Routes = [
  {
    path: 'inicio',
    component: RutaInicioComponent
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }
];
