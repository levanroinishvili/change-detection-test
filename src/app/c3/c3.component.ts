import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseDirective } from '../base.directive';

@Component({
  selector: 'cd-c3',
  standalone: true,
  imports: [],
  templateUrl: './c3.component.html',
  styleUrls: ['../base.scss', './c3.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class C3Component extends BaseDirective {

}
