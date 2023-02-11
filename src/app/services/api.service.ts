import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  dogsUrl = "https://dog-api.kinduff.com/api/facts?number=5";
  catsUrl = "https://meowfacts.herokuapp.com/?count=5";
  fishUrl = "https://www.fishwatch.gov/api/species";

  constructor(private http : HttpClient) { }

  getRandomDogsFact(){
    return this.http.get(this.dogsUrl);
  }

  getRandomCatsFact(){
    return this.http.get(this.catsUrl);
  }

  getRandomFishFact(){
    return this.http.get(this.fishUrl);
  }
}
