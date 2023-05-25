import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantsComponent } from './restaurants-component/restaurants-component.component';
import { HomeComponent } from './home/home.component';
import { RestaurantsJaponeseComponent } from './restaurants-component/restaurants-japonese/restaurants-japonese.component';
import { MatIconModule } from '@angular/material/icon';
import { RestaurantsArabeComponent } from './restaurants-component/restaurants-arabe/restaurants-arabe.component';
import { RestaurantsMexicoComponent } from './restaurants-component/restaurants-mexico/restaurants-mexico.component';
import { RestaurantsBrazilComponent } from './restaurants-component/restaurants-brazil/restaurants-brazil.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    HomeComponent,
    RestaurantsJaponeseComponent,
    RestaurantsArabeComponent,
    RestaurantsMexicoComponent,
    RestaurantsBrazilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
