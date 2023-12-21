import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Directive, DoCheck, HostBinding, Injector, Input, OnChanges, OnDestroy, OnInit, PLATFORM_ID, Signal, SimpleChanges, inject, signal } from '@angular/core';
import { StarterService } from './services/starter.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Subscription } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Directive()
export class BaseDirective implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  ngOnChanges(changes: SimpleChanges): void {
    this.logLifecycleHooks && console.log(`%c ngOnChanges %c${this.componentName}`, 'color:yellow', 'color:lightgreen', this.runningInBrowser && changes)
  }
  ngOnInit(): void {
    this.logLifecycleHooks && console.log(`%c ngOnInit %c${this.componentName}`, 'color:yellow', 'color:lightgreen')
  }
  ngDoCheck(): void {
    this.logLifecycleHooks && console.log(`%c ngDoCheck %c${this.componentName}`, 'color:yellow', 'color:lightgreen')
  }
  ngAfterContentInit(): void {
    this.logLifecycleHooks && console.log(`%c ngAfterContentInit %c${this.componentName}`, 'color:yellow', 'color:lightgreen')
  }
  ngAfterContentChecked(): void {
    this.logLifecycleHooks && console.log(`%c ngAfterContentChecked %c${this.componentName}`, 'color:yellow', 'color:lightgreen')
  }
  ngAfterViewInit(): void {
    this.logLifecycleHooks && console.log(`%c ngAfterViewInit %c${this.componentName}`, 'color:yellow', 'color:lightgreen')
  }
  ngAfterViewChecked(): void {
    this.logLifecycleHooks && console.log(`%c ngAfterViewChecked %c${this.componentName}`, 'color:yellow', 'color:lightgreen')
  }
  ngOnDestroy(): void {
    console.log(`%c ngOnDestroy %c${this.componentName}`, 'color:yellow', 'color:lightgreen')
    this.destroyValueSilent()
    this.destroyValueNormal()
  }

  protected logLifecycleHooks = false

  protected changeDetectionStrategy: ChangeDetectionStrategy = ChangeDetectionStrategy.Default
  protected ChangeDetectionStrategy = ChangeDetectionStrategy
  protected componentName = 'BaseDirective'

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
  private readonly runningInBrowser = isPlatformBrowser(inject(PLATFORM_ID))

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

  protected show(...params: unknown[]) {
    console.log(...params)
  }

}
