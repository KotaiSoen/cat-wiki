import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Breed } from './breed';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  url = 'http://localhost:3000/cats';

  constructor(private http: HttpClient) { }

  getRandomImages() {
    return this.http.get(`${this.url}/random-images`)
  }

  getMostSearched() {
    return this.http.get(`${this.url}/top-ten`)
  }

  getCatBreeds() {
    return this.http.get(`${this.url}/breeds`)
  }

  getOneBreed(name: string) {
    let queryParams = new HttpParams().append("name", name);
    return this.http.get<Breed[]>(`${this.url}/search`, { params: queryParams} );
  }

  getOneImage(id: string) {
    return this.http.get(`${this.url}/images/${id}`);
  }
}
