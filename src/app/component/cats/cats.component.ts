import { ApiService } from 'src/app/services/api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent {

  catsFact : any;

  constructor(private api : ApiService){
    this.api.getRandomCatsFact().subscribe((response) => {
      this.catsFact = response;
    });
  }

}
