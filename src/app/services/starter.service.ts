import { Injectable, NgZone, OnDestroy, inject, } from '@angular/core';
import { BehaviorSubject, Subscription, concat, interval, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarterService implements OnDestroy {
  private silentIndex = 0
  private ngZone = inject(NgZone)

  /** Observable that is hidden from Angular Change Detection */
  private readonly silentHeartBeat$$ = new BehaviorSubject<number>(0)
  public readonly silentHeartBeat$ = this.silentHeartBeat$$.asObservable()
  private schedule?: ReturnType<typeof setInterval>

  /** Observable that is visible to Angular Change Detection */
  public readonly heartbeat$ = new BehaviorSubject<number>(0)
  private subscription?: Subscription

  public start() {
    this.ngZone.runOutsideAngular(() => {
      this.silentHeartBeat$$.next(++this.silentIndex)
      this.schedule = setInterval(() => this.silentHeartBeat$$.next(++this.silentIndex), 1000)
    })

    this.subscription = concat(of(0), interval(1000)).pipe(map((_, i) => i + 1)).subscribe(n => this.heartbeat$.next(n))
  }

  ngOnDestroy(): void {
    clearInterval(this.schedule)
    this.subscription?.unsubscribe()
  }
}
