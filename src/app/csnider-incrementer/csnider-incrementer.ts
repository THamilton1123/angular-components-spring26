import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-csnider-incrementer',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './csnider-incrementer.html',
  styleUrl: './csnider-incrementer.css',
})

export class CsniderIncrementer {

}
