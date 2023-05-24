import { Component } from '@angular/core';
import { RestaurantService } from 'src/restaurant.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  dados: any[] = [];

  constructor(
    private serviceRestaurante: RestaurantService,
    private router: Router
    ) { }

  ngOnInit(){
    this.buscarDados();
  }

  buscarDados() {
    this.serviceRestaurante.getDados().pipe(
      map((data: any[]) => {
        return data.map((item: any) => item);
      })
    ).subscribe(
      mappedData => {
        this.dados = mappedData;
      },
      error => {
        console.error('Ocorreu um erro:', error);
      }
    );
}

resArabe(){
  this.router.navigate(['/restaurantes/arabe']);
}

resJaponese(){
  this.router.navigate(['/restaurantes/japonese']);
}

resMexico(){
  this.router.navigate(['/restaurantes/mexico']);
}

resBrazil(){
  this.router.navigate(['/restaurantes/brazil']);
}

}

