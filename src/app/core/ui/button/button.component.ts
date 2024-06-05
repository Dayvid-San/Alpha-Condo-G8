import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
[x: string]: any;
  @Input() buttonLabel: string = 'Clique';
  @Input() buttonType: string = 'button';
  @Input() buttonClass: string = 'primary';

  @Output() buttonClick = new EventEmitter<void>();

  onClick(): void {
    this.buttonClick.emit();
  }
}
