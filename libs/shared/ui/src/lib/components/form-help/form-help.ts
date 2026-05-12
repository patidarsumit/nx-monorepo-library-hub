import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'lib-form-help',
  imports: [],
  templateUrl: './form-help.html',
  styleUrl: './form-help.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormHelp {
  id = input<string>();
  message = input('');
}
