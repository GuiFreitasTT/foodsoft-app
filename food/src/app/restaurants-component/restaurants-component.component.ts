import { Component } from '@angular/core';
import { RestaurantService } from 'src/restaurant.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-restaurants-component',
  templateUrl: './restaurants-component.component.html',
  styleUrls: ['./restaurants-component.component.css']
})
export class RestaurantsComponent {
dados: any[] = [];

constructor(private serviceRestaurante: RestaurantService) { }

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
}
