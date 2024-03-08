import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SkillComponent } from '../skill/skill.component';
import { Skill } from '../models/skill.model';
import { Developer } from '../models/developer.model';


@Component({
  selector: 'app-developer',
  standalone: true,
  imports: [CommonModule, SkillComponent],
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.scss'
})
export class DeveloperComponent {

    developer: Developer = {
    lastName: 'Zaia',
    firstName: 'Jonathan',
    age: 31,
    gender: 'Male',
    bio: 'I am a developer',
    skills: [
      {
        name: 'Angular',
        logo: 'https://angular.io/assets/images/logos/angular/angular.png',
        site: 'https://angular.io/',
      },
      {
        name: 'PHP',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png',
        site: 'https://www.php.net/',
      },
      {
        name: 'Symfony',
        logo: 'https://symfony.com/logos/symfony_black_03.png',
        site: 'https://symfony.com/',
      },
    ],
  };
}
