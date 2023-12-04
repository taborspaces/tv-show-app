import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  constructor(private httpClient: HttpClient) { }

   getDefaultTVShow(show:string) {
   this.httpClient.get('https://api.tvmaze.com/search/shows?q='${show}&appid={KQO3HONaeAX0S7Byiph_r7977aP_GXCB})
   }

  }