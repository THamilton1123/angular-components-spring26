import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cbares-dice-roll',
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './cbares-dice-roll.html',
  styleUrl: './cbares-dice-roll.css',
})
export class CbaresDiceRoll {
  protected readonly rollDice = () => {
    console.log('roll button clicked');
  }
}
