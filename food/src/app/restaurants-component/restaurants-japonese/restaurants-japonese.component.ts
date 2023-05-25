import { Component } from '@angular/core';
import { map } from 'rxjs';
import { RestaurantService } from 'src/restaurant.service';

@Component({
  selector: 'app-restaurants-japonese',
  templateUrl: './restaurants-japonese.component.html',
  styleUrls: ['./restaurants-japonese.component.css']
})
export class RestaurantsJaponeseComponent {

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
      return data.filter((item: any) => item.type === 'JAPANESE');

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
