import { Component, signal } from '@angular/core';
import { PizzaToppings } from './pizza-toppings/pizza-toppings';
import { MrooneyAddition } from './mrooney-addition/mrooney-addition';

@Component({
  selector: 'app-root',
  imports: [
    PizzaToppings,
    MrooneyAddition
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-components');
}
