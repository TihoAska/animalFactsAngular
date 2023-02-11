import { ApiService } from 'src/app/services/api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.scss']
})
export class FishComponent {

  fishFact : any = [];
  fishHealthBenefits : any = [];

  constructor(private api : ApiService){
    this.api.getRandomFishFact().subscribe((response) => {
      this.fishFact = response;
    })
  }
}
