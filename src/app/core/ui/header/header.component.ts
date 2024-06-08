import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { PhotoComponent } from '../../photo/photo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ButtonComponent,
    PhotoComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  handleButtonClick(): void {
    alert('It is working!');
  }
}
