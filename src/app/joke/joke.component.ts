import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, PLATFORM_ID, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { JokeService } from '../services/joke.service';
import { StarterService } from '../services/starter.service';
import { interval } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'cd-joke',
  standalone: true,
  imports: [],
  providers: [],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JokeComponent {
  private readonly joke$ = inject(JokeService).getRandomJoke$()
  protected readonly jokeS = toSignal(this.joke$)

  protected readonly changeDetectorRef = inject(ChangeDetectorRef)
  public readonly starterService = inject(StarterService)

  protected heartbeat = -1
  protected heartbeat1 = -1
  // protected readonly heartbeatS = toSignal(this.starterService.heartbeat$)
  s1 = this.starterService.silentHeartBeat$.subscribe(n => {
    this.heartbeat = n
    // this.changeDetectorRef.markForCheck()
  })

}
