import { DogsComponent } from './component/dogs/dogs.component';
import { FishComponent } from './component/fish/fish.component';
import { CatsComponent } from './component/cats/cats.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'dogs',
    component: DogsComponent
  },
  {
    path: 'cats',
    component: CatsComponent
  },
  {
    path: 'fish',
    component: FishComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
