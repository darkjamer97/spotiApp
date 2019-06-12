import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }

  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDpOgR4vIP3E8E53E4aA0qzZNyss5ngOqtdW7g2C7kc1Q-7qm1ALYyco0ZsuJ62Ero6jY9bx_X5sjjRTkQ'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?country=ES&limit=20').pipe( map( response => response['albums'].items));
  }

  getArtistas(termino: string){  
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe( map( response => response['artists'].items));
  }

  getArtista(id: string){  
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string){  
    return this.getQuery(`artists/${id}/top-tracks?country=es`).pipe( map( response => response['tracks']));
  }
}
