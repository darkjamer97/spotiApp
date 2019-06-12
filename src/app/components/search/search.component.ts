import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  artistas: any[] = [];
  loading: boolean;
  resultado: boolean;
  error: boolean;
  mensajeError: string;

  constructor(private spotify: SpotifyService) { }

  buscar(termino: string){
    if (termino)
    {
      this.loading = true;
      this.spotify.getArtistas(termino).subscribe(( response: any ) => {
        this.artistas = response;
        this.loading = false;
        this.resultado = this.artistas.length > 0 ? this.resultado = true : this.resultado = false;
      }, errorServicio => {
        this.error = true;
        this.loading = false;
        this.mensajeError = errorServicio.error.error.message;
      });
    }
  }
}
