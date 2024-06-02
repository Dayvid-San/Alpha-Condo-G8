import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./ui/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    HeaderComponent
  ]
})
export class AppComponent {
  nameCondo = 'G8'
  title = 'Alpha Condo | ' + this.nameCondo;
}
