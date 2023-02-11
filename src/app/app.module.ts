import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogsComponent } from './component/dogs/dogs.component';
import { CatsComponent } from './component/cats/cats.component';
import { FishComponent } from './component/fish/fish.component';
import { HeaderComponent } from './component/header/header.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    CatsComponent,
    HeaderComponent,
    FishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
