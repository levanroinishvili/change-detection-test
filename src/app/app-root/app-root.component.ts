import { ChangeDetectorRef, Component, PLATFORM_ID, afterNextRender, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { StarterService } from '../services/starter.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'cd-app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app-root.component.html',
  styleUrl: './app-root.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppRootComponent {
  protected readonly depth = 3
  private readonly starterService = inject(StarterService)
  protected readonly changeDetectorRef = inject(ChangeDetectorRef)

  protected start() {
    this.starterService.start()
  }

  logChangeDetector() {
    console.log(this.changeDetectorRef)
  }

  x = isPlatformBrowser(inject(PLATFORM_ID)) ? 'X-browser' : 'X-server'
  constructor() {
    afterNextRender(() => {
      setTimeout(() => console.log('x updated to', this.x = 'Next value'))
    })
  }
}
