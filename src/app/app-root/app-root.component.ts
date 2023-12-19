import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { C1CdOnPushComponent } from '../c1-cd-on-push.component';
import { StarterService } from '../services/starter.service';

@Component({
  selector: 'cd-app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    C1CdOnPushComponent,
  ],
  templateUrl: './app-root.component.html',
  styleUrl: './app-root.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppRootComponent {
  private readonly starterService = inject(StarterService)

  protected start() {
    this.starterService.start()
  }
}
