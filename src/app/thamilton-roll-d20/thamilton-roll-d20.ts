import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatAnchor } from '@angular/material/button';

@Component({
  selector: 'app-thamilton-roll-d20',
  imports: [MatCardModule, MatAnchor],
  templateUrl: './thamilton-roll-d20.html',
  styleUrl: './thamilton-roll-d20.css',
})
export class ThamiltonRollD20 {
  private readonly rollD20 = () => {};
}
