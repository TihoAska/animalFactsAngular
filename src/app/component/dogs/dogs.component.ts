import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent {
  
  dogsFact : any;

  constructor(private api : ApiService){
    this.api.getRandomDogsFact().subscribe((response) =>{
      this.dogsFact = response;
    });
  }
}
