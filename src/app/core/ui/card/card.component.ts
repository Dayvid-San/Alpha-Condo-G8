import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() nameResident: string = 'Residente'
  @Input() apartament: string = 'Apartamento'
  @Input() forum: string = ''
}
