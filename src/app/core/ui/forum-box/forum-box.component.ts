import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-forum-box',
  standalone: true,
  imports: [],
  templateUrl: './forum-box.component.html',
  styleUrl: './forum-box.component.scss'
})
export class ForumBoxComponent {
  cardStatus: boolean = false;

  @Input() title: string = 'Título tópico';
  @Input() text: string = 'Tópico vazio';

  @Output() cardClick = new EventEmitter<void>();

  onClick (): boolean {
    return this.cardStatus == false ? this.cardStatus = true : this.cardStatus = false;
  }
 }
