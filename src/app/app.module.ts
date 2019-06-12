import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { AppComponent } from './app.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

// Rutas
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

// Pipes
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';
import { NoimagePipe } from './pipes/noimage.pipe';
import { FollowUrlSeguraPipe } from './pipes/follow-url-segura.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ArtistaComponent,
    HomeComponent,
    SearchComponent,
    TarjetasComponent,
    LoadingComponent,
    NavbarComponent,
    DomSeguroPipe,
    NoimagePipe,
    FollowUrlSeguraPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
