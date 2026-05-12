import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { FormField } from '@angular/forms/signals';
import type { Field } from '@angular/forms/signals';

@Component({
  selector: 'lib-checkbox',
  imports: [FormField],
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Checkbox {
  field = input<Field<boolean>>();
  id = input<string>();
  label = input('');
  help = input('');

  protected controlId = computed(
    () => this.id() ?? this.field()?.().name() ?? 'checkbox',
  );
}
