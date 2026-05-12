import { ChangeDetectionStrategy, Component, input } from '@angular/core';

type SeparatorOrientation = 'horizontal' | 'vertical';

@Component({
  selector: 'lib-separator',
  imports: [],
  templateUrl: './separator.html',
  styleUrl: './separator.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Separator {
  orientation = input<SeparatorOrientation>('horizontal');
  decorative = input(true);
}
