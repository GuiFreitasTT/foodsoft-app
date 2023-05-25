import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { RestaurantService } from 'src/restaurant.service';

@Component({
  selector: 'app-restaurants-brazil',
  templateUrl: './restaurants-brazil.component.html',
  styleUrls: ['./restaurants-brazil.component.css']
})
export class RestaurantsBrazilComponent {

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
      return data.filter((item: any) => item.type === 'BRAZILIAN');

    })
  ).subscribe(
    filteredData => {
      this.dados = filteredData;
    },
    error => {
      console.error('Ocorreu um erro:', error);
    }
  );
}



}
