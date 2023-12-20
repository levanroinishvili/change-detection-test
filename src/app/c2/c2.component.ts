import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseDirective } from '../base.directive';
import { C3Component } from '../c3/c3.component';

@Component({
  selector: 'cd-c2',
  standalone: true,
  imports: [C3Component],
  templateUrl: './c2.component.html',
  styleUrls: ['../base.scss', './c2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class C2Component extends BaseDirective {
  override changeDetectionStrategy: ChangeDetectionStrategy = ChangeDetectionStrategy.OnPush
}
