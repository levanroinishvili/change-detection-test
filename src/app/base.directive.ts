import { ChangeDetectionStrategy, ChangeDetectorRef, Directive, HostBinding, Injector, Input, OnDestroy, Signal, inject, signal } from '@angular/core';
import { StarterService } from './services/starter.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Subscription } from 'rxjs';

@Directive()
export class BaseDirective implements OnDestroy {

  protected changeDetectionStrategy: ChangeDetectionStrategy = ChangeDetectionStrategy.Default
  protected ChangeDetectionStrategy = ChangeDetectionStrategy

  @HostBinding('style.background-color')
  get bg() {
    return this.changeDetectionStrategy === ChangeDetectionStrategy.Default
      ? 'white'
      : 'lightblue'
  }

  @Input() i1!: number
  @Input() i2!: number
  @Input() i3!: number
  @Input() i4!: number

  private readonly injector = inject(Injector)
  protected readonly changeDetector = inject(ChangeDetectorRef)
  private readonly starterService = inject(StarterService)

  protected valueSilent = -1
  protected valueNormal = -1
  protected signalSilent: Signal<number> = signal(-1)
  protected signalNormal: Signal<number> = signal(-1)

  protected valueSilentUnbound = true
  protected valueNormalUnbound = true
  protected signalSilentUnbound = true
  protected signalNormalUnbound = true

  protected valueSilentSub?: Subscription
  protected valueNormalSub?: Subscription

  protected initValueSilent() {
    this.valueSilentSub = this.starterService.silentHeartBeat$.subscribe(n => this.valueSilent = n)
  }
  protected destroyValueSilent() {
    this.valueSilentSub?.unsubscribe()
  }
  protected initValueNormal() {
    this.valueNormalSub = this.starterService.heartbeat$.subscribe(n => this.valueNormal = n)
  }
  protected destroyValueNormal() {
    this.valueNormalSub?.unsubscribe()
  }
  protected initSignalSilent() {
    this.signalSilent = toSignal(this.starterService.silentHeartBeat$, {injector: this.injector, requireSync: true})
  }
  protected destroySignalSilent() {
    this.signalSilent = signal(-1)
  }
  protected initSignalNormal() {
    this.signalNormal = toSignal(this.starterService.heartbeat$, {injector: this.injector, requireSync: true})
  }
  protected destroySignalNormal() {
    this.signalNormal = signal(-1)
  }

  protected checkboxChecked(event: MouseEvent) {
    console.log((event.target as HTMLInputElement).checked)
    return true
  }

  ngOnDestroy(): void {
    this.destroyValueSilent()
    this.destroyValueNormal()
  }

  protected show(...params: unknown[]) {
    console.log(...params)
  }

}
