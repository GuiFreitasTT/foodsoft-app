import { Component } from '@angular/core';
import { RestaurantService } from 'src/restaurant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'food';
  constructor(private serviceRestaurante: RestaurantService) { }

}
