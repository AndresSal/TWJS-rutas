import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RutaInicioComponent } from './misComponentes/ruta-inicio/ruta-inicio.component';
import { RutaNoEncontradaComponent } from './misComponentes/ruta-no-encontrada/ruta-no-encontrada.component';
import {RouterModule} from '@angular/router';
import {RUTAS_APP} from './app.routes';
import { RutaFAQComponent } from './misComponentes/ruta-faq/ruta-faq.component';
import { RutaIniUsuarioComponent } from './misComponentes/ruta-ini-usuario/ruta-ini-usuario.component';
import { RutaIniPermisosComponent } from './misComponentes/ruta-ini-permisos/ruta-ini-permisos.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaInicioComponent,
    RutaNoEncontradaComponent,
    RutaFAQComponent,
    RutaIniUsuarioComponent,
    RutaIniPermisosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      RUTAS_APP,
      {useHash: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
