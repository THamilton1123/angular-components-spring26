import { Component, signal } from '@angular/core';
import { PizzaToppings } from './pizza-toppings/pizza-toppings';
import {ClickCounter } from './click-counter/click-counter'

@Component({
  selector: 'app-root',
  imports: [PizzaToppings, ClickCounter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-components');
}
