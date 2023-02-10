import { DogsComponent } from './component/component1/dogs.component';
import { MiceComponent } from './component/component3/mice.component';
import { CatsComponent } from './component/component2/cats.component';

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
    path: 'mice',
    component: MiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
