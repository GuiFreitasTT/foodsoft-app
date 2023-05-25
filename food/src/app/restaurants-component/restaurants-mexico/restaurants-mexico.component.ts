import { Component } from '@angular/core';
import { map } from 'rxjs';
import { RestaurantService } from 'src/restaurant.service';

@Component({
  selector: 'app-restaurants-mexico',
  templateUrl: './restaurants-mexico.component.html',
  styleUrls: ['./restaurants-mexico.component.css']
})
export class RestaurantsMexicoComponent {

  dados: any[] = [];

  constructor(
    private serviceRestaurante: RestaurantService,
    ) { }

ngOnInit(){
  this.buscarDados();
}

buscarDados() {
  this.serviceRestaurante.getDados().pipe(
    map((data: any[]) => {
      return data.filter((item: any) => item.type === 'MEXICAN');

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
