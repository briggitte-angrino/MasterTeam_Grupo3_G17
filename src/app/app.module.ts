import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './Plantilla/barra-navegacion/barra-navegacion.component';
import { PiePaginaComponent } from './Plantilla/pie-pagina/pie-pagina.component';
import { InicioComponent } from './Plantilla/inicio/inicio.component';
import { ErrorComponent } from './Plantilla/error/error.component';
import { LogoComponent } from './Plantilla/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    PiePaginaComponent,
    InicioComponent,
    ErrorComponent,
    LogoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
