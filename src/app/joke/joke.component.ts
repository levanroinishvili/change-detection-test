import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { JokeService } from '../services/joke.service';
import { StarterService } from '../services/starter.service';

@Component({
  selector: 'cd-joke',
  standalone: true,
  imports: [],
  providers: [],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JokeComponent {
  private readonly joke$ = inject(JokeService).getRandomJoke$()
  protected readonly jokeS = toSignal(this.joke$)

  protected readonly changeDetectorRef = inject(ChangeDetectorRef)
  private readonly starterService = inject(StarterService)
}
