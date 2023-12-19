import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { JokeService } from '../services/joke.service';
import { tap } from 'rxjs';

@Component({
  selector: 'cd-joke',
  standalone: true,
  imports: [],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.scss'
})
export class JokeComponent {
  private readonly joke$ = inject(JokeService).getRandomJoke$().pipe(tap(joke => console.log(joke)))
  protected readonly jokeS = toSignal(this.joke$)
}
