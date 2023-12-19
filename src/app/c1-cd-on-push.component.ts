import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseDirective } from './base.directive';

@Component({
  selector: 'cd-c1-cd-on-push',
  standalone: true,
  imports: [],
  templateUrl: './base.html',
  styleUrl: './base.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class C1CdOnPushComponent extends BaseDirective {

}
