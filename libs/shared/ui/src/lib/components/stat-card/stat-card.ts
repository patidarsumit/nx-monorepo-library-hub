import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'lib-stat-card',
  imports: [],
  templateUrl: './stat-card.html',
  styleUrl: './stat-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatCard {
  label = input('');
  value = input<string | number>('');
  hint = input('');
}
