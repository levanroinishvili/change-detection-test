import { ChangeDetectionStrategy, Component } from '@angular/core';
import { C1CdOnPushComponent } from './c1-cd-on-push.component';
import { BaseDirective } from './base.directive';

@Component({
  selector: 'cd-c2-cd-default',
  standalone: true,
  imports: [C1CdOnPushComponent],
  templateUrl: './base.html',
  styleUrl: './base.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class C2CdDefaultComponent extends BaseDirective {

}
