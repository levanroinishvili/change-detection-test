import { isPlatformBrowser } from '@angular/common';
import { AfterRenderPhase, Injectable, NgZone, OnDestroy, PLATFORM_ID, afterNextRender, afterRender, inject, signal, } from '@angular/core';
import { BehaviorSubject, Subscription, concat, defer, finalize, interval, map, of } from 'rxjs';

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

  z = signal(1)

  /** Observable that is visible to Angular Change Detection */
  public readonly heartbeat$ = defer(() => {
    console.log('Starting normal heartbeat')
    return concat(of(0), interval(1000))
  }).pipe(
    map(() => this.silentIndex),
    finalize(console.log.bind(console, `Stopping normal hearbeat`))
  )
  private subscription?: Subscription

  public start() {
    console.log('%cSTARTING HEARTBEAT', 'color:red;font-size:24px;')
    this.ngZone.runOutsideAngular(() => {
      this.silentHeartBeat$$.next(++this.silentIndex)
      this.schedule = setInterval(() => this.silentHeartBeat$$.next(++this.silentIndex), 1000)
    })
  }

  constructor() {
    console.log('Constructing starter service')
    isPlatformBrowser(inject(PLATFORM_ID)) && this.start()
  }

  ngOnDestroy(): void {
    console.log('Destroying starter service')
    clearInterval(this.schedule)
    this.subscription?.unsubscribe()
  }
}
