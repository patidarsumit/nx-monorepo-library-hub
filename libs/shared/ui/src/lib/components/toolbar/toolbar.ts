import { ChangeDetectionStrategy, Component, input } from '@angular/core';

type ToolbarAlign = 'start' | 'between' | 'end';

@Component({
  selector: 'lib-toolbar',
  imports: [],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Toolbar {
  align = input<ToolbarAlign>('between');
}
