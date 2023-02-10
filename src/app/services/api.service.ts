import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "https://dog-api.kinduff.com/api/facts?number=5";

  constructor(private http : HttpClient) { }

  getRandomDogsFact(){
    return this.http.get(this.url);
  }
}
