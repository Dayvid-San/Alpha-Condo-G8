import { Component } from '@angular/core';
import { ForumBoxComponent } from '../../../core/ui/forum-box/forum-box.component';

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [
    ForumBoxComponent
  ],
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.scss'
})
export class ForumComponent {

}
