import { ChangeDetectionStrategy, Component } from '@angular/core';
import { C1Component } from '../c1/c1.component';
import { BaseDirective } from '../base.directive';

@Component({
  selector: 'cd-cd-root',
  standalone: true,
  imports: [C1Component],
  templateUrl: './cd-root.component.html',
  styleUrl: './cd-root.component.scss',
  changeDetection: ChangeDetectionStrategy.Default
})
export class CdRootComponent extends BaseDirective {
  protected override componentName = 'CD-Root'
  protected override changeDetectionStrategy = ChangeDetectionStrategy.Default
}
