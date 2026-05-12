import { ChangeDetectionStrategy, Component, input } from '@angular/core';

type AvatarSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'lib-avatar',
  imports: [],
  templateUrl: './avatar.html',
  styleUrl: './avatar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Avatar {
  src = input<string>();
  alt = input('');
  initials = input('');
  size = input<AvatarSize>('md');
}
