import { Component } from '@angular/core';

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.scss'
})
export class PhotoComponent {
  src: string = 'https://dayvidsantana.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDayvid%20Santana.8e13ae1c.jpeg&w=384&q=75';

  
}
