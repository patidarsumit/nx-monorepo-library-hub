import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

type IconButtonVariant = 'plain' | 'soft' | 'solid';
type IconButtonType = 'button' | 'submit' | 'reset';

@Component({
  selector: 'lib-icon-button',
  imports: [],
  templateUrl: './icon-button.html',
  styleUrl: './icon-button.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconButton {
  label = input('Action');
  variant = input<IconButtonVariant>('plain');
  type = input<IconButtonType>('button');
  disabled = input(false);

  pressed = output<MouseEvent>();
}
