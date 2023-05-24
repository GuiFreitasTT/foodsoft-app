import { Component } from '@angular/core';
import { RestaurantService } from 'src/restaurant.service';

@Component({
  selector: 'app-restaurants-component',
  templateUrl: './restaurants-component.component.html',
  styleUrls: ['./restaurants-component.component.css']
})
export class RestaurantsComponent {
dados : any;

constructor(private serviceRestaurante: RestaurantService) { }

  ngOnInit(){
    this.buscarDados();
  }

  buscarDados() {
    this.serviceRestaurante.getDados().subscribe(
      data => {
        this.dados = data;
      },
      error => {
        console.error('Ocorreu um erro:', error);
      }
    );
  }
}
