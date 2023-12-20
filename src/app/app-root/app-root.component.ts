import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { StarterService } from '../services/starter.service';
import { C1Component } from '../c1/c1.component';

@Component({
  selector: 'cd-app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    C1Component,
  ],
  templateUrl: './app-root.component.html',
  styleUrl: './app-root.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppRootComponent {
  protected readonly depth = 3
  private readonly starterService = inject(StarterService)

  protected start() {
    this.starterService.start()
  }
}
