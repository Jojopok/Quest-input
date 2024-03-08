import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OutputbuttonComponent } from './outputbutton/outputbutton.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OutputbuttonComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'input';

  boutons = ['bouton1', 'bouton2', 'bouton3', 'bouton4', 'bouton5'];

  buttonClick(data: string) {
  console.log(`${data} a été cliqué`);    // je récupère le nom du bouton dans le parent et j'affiche
}
}
