import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'lib-skeleton',
  imports: [],
  templateUrl: './skeleton.html',
  styleUrl: './skeleton.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skeleton {
  label = input('Loading');
}
