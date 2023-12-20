import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseDirective } from './base.directive';
import { C2CdDefaultComponent } from './c2-cd-default.component';

@Component({
  selector: 'cd-c1-cd-on-push',
  standalone: true,
  imports: [C2CdDefaultComponent],
  templateUrl: './base.html',
  styleUrl: './base.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class C1CdOnPushComponent extends BaseDirective {

}
