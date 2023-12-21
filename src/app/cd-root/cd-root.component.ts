import { ChangeDetectionStrategy, Component } from '@angular/core';
import { C1Component } from '../c1/c1.component';

@Component({
  selector: 'cd-cd-root',
  standalone: true,
  imports: [C1Component],
  templateUrl: './cd-root.component.html',
  styleUrl: './cd-root.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdRootComponent {

}
