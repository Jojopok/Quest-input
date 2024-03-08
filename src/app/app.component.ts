import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeveloperComponent } from './developer/developer.component';
import { ButtonComponent } from './button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DeveloperComponent, ButtonComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'input'

  colors: string[] = ["red", "blue", "transparent", "pink", "violet"];

}
