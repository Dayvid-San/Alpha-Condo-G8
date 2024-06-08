import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
[x: string]: any;
  @Input() buttonLabel: string = 'Clique';
  @Input() buttonType: string = 'button';
  @Input() buttonClass: string = 'primary';
  @Input() buttonRouter: string = '/';

  @Output() buttonClick = new EventEmitter<void>();

  onClick(): void {
    this.buttonClick.emit();
  }
}
