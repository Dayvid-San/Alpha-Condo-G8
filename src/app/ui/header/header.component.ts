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
  logo: string = 'https://alphacondo.netlify.app/_ipx/w_640,q_75/%2F_next%2Fstatic%2Fmedia%2Flogo_G8.6ae40645.png?url=%2F_next%2Fstatic%2Fmedia%2Flogo_G8.6ae40645.png&w=640&q=75'
  handleButtonClick(): void {
    alert('It is working!');
  }
}
