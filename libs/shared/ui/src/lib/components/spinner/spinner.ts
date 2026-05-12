import { ChangeDetectionStrategy, Component, input } from '@angular/core';

type SpinnerSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'lib-spinner',
  imports: [],
  templateUrl: './spinner.html',
  styleUrl: './spinner.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Spinner {
  label = input('Loading');
  size = input<SpinnerSize>('md');
}
