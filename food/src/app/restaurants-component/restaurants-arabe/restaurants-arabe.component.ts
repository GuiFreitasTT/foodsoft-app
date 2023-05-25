import { Component } from '@angular/core';
import { map } from 'rxjs';
import { RestaurantService } from 'src/restaurant.service';

@Component({
  selector: 'app-restaurants-arabe',
  templateUrl: './restaurants-arabe.component.html',
  styleUrls: ['./restaurants-arabe.component.css']
})
export class RestaurantsArabeComponent {

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
      return data.filter((item: any) => item.type === 'ARABIC');
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

