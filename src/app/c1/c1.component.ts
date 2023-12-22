import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseDirective } from '../base.directive';
import { C2Component } from '../c2/c2.component';

@Component({
  selector: 'cd-c1',
  standalone: true,
  imports: [C2Component],
  templateUrl: './c1.component.html',
  styleUrls: ['../base.scss', './c1.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class C1Component extends BaseDirective {
  protected override componentName = 'C1'
}
