import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cd-joke-analysis',
  standalone: true,
  imports: [],
  providers: [],
  templateUrl: './joke-analysis.component.html',
  styleUrl: './joke-analysis.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JokeAnalysisComponent {

}
