import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatAnchor, MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-thamilton-roll-d20',
  imports: [MatCardModule, MatButtonModule, MatFormField, MatInputModule, MatAnchor],
  templateUrl: './thamilton-roll-d20.html',
  styleUrl: './thamilton-roll-d20.css',
})
export class ThamiltonRollD20 {
  private readonly rollD20 = () => {};
}
