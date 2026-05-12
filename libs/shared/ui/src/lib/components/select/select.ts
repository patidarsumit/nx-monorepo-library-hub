import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { FormField } from '@angular/forms/signals';
import type { Field } from '@angular/forms/signals';

export interface SelectOption {
  label: string;
  value: string;
}

@Component({
  selector: 'lib-select',
  imports: [FormField],
  templateUrl: './select.html',
  styleUrl: './select.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Select {
  field = input<Field<string>>();
  id = input<string>();
  label = input('');
  placeholder = input('Select an option');
  options = input<readonly SelectOption[]>([]);

  protected controlId = computed(
    () => this.id() ?? this.field()?.().name() ?? 'select',
  );
}
