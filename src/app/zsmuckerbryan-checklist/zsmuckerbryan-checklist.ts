import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-zsmuckerbryan-checklist',
  imports: [
    MatCardModule,
    MatCheckboxModule
  ],
  templateUrl: './zsmuckerbryan-checklist.html',
  styleUrl: './zsmuckerbryan-checklist.css',
})
export class ZsmuckerbryanChecklist {

}
