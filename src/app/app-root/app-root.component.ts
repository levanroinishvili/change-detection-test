import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JokeComponent } from '../joke/joke.component';

@Component({
  selector: 'cd-app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    JokeComponent,
  ],
  templateUrl: './app-root.component.html',
  styleUrl: './app-root.component.scss'
})
export class AppRootComponent {

}
