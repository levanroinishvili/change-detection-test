import { Component } from '@angular/core';
import { AppRootComponent } from './app-root/app-root.component';

@Component({
  selector: 'cd-root',
  standalone: true,
  imports: [AppRootComponent],
  template: '<cd-app-root />',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
}
