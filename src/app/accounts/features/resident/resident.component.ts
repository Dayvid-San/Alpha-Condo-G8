import { Component } from '@angular/core';
import { CardComponent } from '../../../core/ui/card/card.component';

@Component({
  selector: 'app-resident',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './resident.component.html',
  styleUrl: './resident.component.scss'
})
export class ResidentComponent {

}
