import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { FormField } from '@angular/forms/signals';
import type { Field } from '@angular/forms/signals';

@Component({
  selector: 'lib-date-picker',
  imports: [FormField],
  templateUrl: './date-picker.html',
  styleUrl: './date-picker.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePicker {
  field = input<Field<string>>();
  id = input<string>();
  label = input('');

  protected controlId = computed(
    () => this.id() ?? this.field()?.().name() ?? 'date-picker',
  );
}
