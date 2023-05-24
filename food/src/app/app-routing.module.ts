import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantsComponent } from './restaurants-component/restaurants-component.component';
import { RestaurantsJaponeseComponent } from './restaurants-component/restaurants-japonese/restaurants-japonese.component';
import { RestaurantsArabeComponent } from './restaurants-component/restaurants-arabe/restaurants-arabe.component';
import { HomeComponent } from './home/home.component';
import { RestaurantsMexicoComponent } from './restaurants-component/restaurants-mexico/restaurants-mexico.component';
import { RestaurantsBrazilComponent } from './restaurants-component/restaurants-brazil/restaurants-brazil.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redireciona para a rota '/home' ao acessar a raiz do aplicativo
  { path: 'home', component: HomeComponent },
  { path: 'restaurantes', component: RestaurantsComponent},
  { path: 'restaurantes/japonese', component: RestaurantsJaponeseComponent},
  { path: 'restaurantes/arabe', component: RestaurantsArabeComponent},
  { path: 'restaurantes/mexico', component: RestaurantsMexicoComponent},
  { path: 'restaurantes/brazil', component: RestaurantsBrazilComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

