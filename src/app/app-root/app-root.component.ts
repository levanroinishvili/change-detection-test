import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { C1CdOnPushComponent } from '../c1-cd-on-push.component';
import { StarterService } from '../services/starter.service';
import { C2CdDefaultComponent } from '../c2-cd-default.component';

@Component({
  selector: 'cd-app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    C1CdOnPushComponent,
    C2CdDefaultComponent,
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
