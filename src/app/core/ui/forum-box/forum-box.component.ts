import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-forum-box',
  standalone: true,
  imports: [],
  templateUrl: './forum-box.component.html',
  styleUrl: './forum-box.component.scss'
})
export class ForumBoxComponent {
  cardStatus: boolean = true;

  @Input() title: string = 'Título tópico';
  @Input() text: string = 'Tópico vazio';

  onCLick () {
    this.cardStatus = true
  }
 }
