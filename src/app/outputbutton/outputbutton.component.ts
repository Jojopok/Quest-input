import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-outputbutton',
  standalone: true,
  imports: [],
  templateUrl: './outputbutton.component.html',
  styleUrl: './outputbutton.component.scss'
})
export class OutputbuttonComponent {

  @Input() name!: string;  // je récupère le nom du bouton dans le parent
  @Output() buttonClick = new EventEmitter<string>();  // je crée un événement pour envoyer le nom du bouton au parent

  onClick() {
    this.buttonClick.emit(`le bouton ${this.name}`);  // (`bouton ${this.name}`) conquaquatène dans une function et qui envoie au parent
  }
}

