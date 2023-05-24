import { Component } from '@angular/core';
import { RestaurantService } from 'src/restaurant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'food';
  dados: any;

  constructor(private serviceRestaurante: RestaurantService) { }

  ngOnInit(){
    this.buscarDados();
  }

  buscarDados() {
    this.serviceRestaurante.getDados().subscribe(
      data => {
        this.dados = data;
        console.log(this.dados);
      },
      error => {
        console.error('Ocorreu um erro:', error);
      }
    );
  }

}
