import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { FormField } from '@angular/forms/signals';
import type { Field } from '@angular/forms/signals';

@Component({
  selector: 'lib-switch',
  imports: [FormField],
  templateUrl: './switch.html',
  styleUrl: './switch.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Switch {
  field = input<Field<boolean>>();
  id = input<string>();
  label = input('');

  protected controlId = computed(
    () => this.id() ?? this.field()?.().name() ?? 'switch',
  );
}
