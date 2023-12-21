import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cd-joke',
  standalone: true,
  imports: [],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JokeComponent {

}
