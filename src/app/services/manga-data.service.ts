import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MangaDataService {
  seriesUrl = 'series/manage-series';
  publicsUrl = 'publics/manage-publics';
  mangasUrl = 'mangas/manage-mangas';

  constructor(private http: HttpClient) { }

  getSeries(): Observable<any> {
    return this.http.get(this.seriesUrl);
  }

  getPublics(): Observable<any> {
    return this.http.get(this.publicsUrl);
  }

  postManga(formManga) {
    return this.http.post("mangas/create-manga", formManga, {responseType: 'text'})
  }

  getMangas(): Observable<any> {
    return this.http.get(this.mangasUrl);
  }

  delete(manga : number){
    const id = manga;
    const url = `${this.mangasUrl}/${id}`;
    return this.http.delete(url, {responseType: 'text'});
  }
}
