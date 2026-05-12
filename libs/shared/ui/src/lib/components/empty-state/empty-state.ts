import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'lib-empty-state',
  imports: [],
  templateUrl: './empty-state.html',
  styleUrl: './empty-state.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyState {
  title = input('Nothing to show');
  description = input('');
}
