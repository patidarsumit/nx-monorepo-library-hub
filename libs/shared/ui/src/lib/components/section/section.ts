import { ChangeDetectionStrategy, Component, input } from '@angular/core';

type SectionSpacing = 'sm' | 'md' | 'lg';

@Component({
  selector: 'lib-section',
  imports: [],
  templateUrl: './section.html',
  styleUrl: './section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Section {
  title = input('');
  description = input('');
  spacing = input<SectionSpacing>('md');
}
