import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import type { Field } from '@angular/forms/signals';

export interface RadioOption {
  label: string;
  value: string;
}

@Component({
  selector: 'lib-radio-group',
  imports: [],
  templateUrl: './radio-group.html',
  styleUrl: './radio-group.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioGroup {
  field = input<Field<string>>();
  label = input('');
  options = input<readonly RadioOption[]>([]);

  protected groupName = computed(
    () => this.field()?.().name() ?? 'radio-group',
  );

  protected isSelected(value: string): boolean {
    return this.field()?.().value() === value;
  }

  protected choose(value: string): void {
    this.field()?.().value.set(value);
  }
}
