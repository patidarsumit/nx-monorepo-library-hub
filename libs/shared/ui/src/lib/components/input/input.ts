import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { FormField } from '@angular/forms/signals';
import type { Field } from '@angular/forms/signals';

type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';

@Component({
  selector: 'lib-input',
  imports: [FormField],
  templateUrl: './input.html',
  styleUrl: './input.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Input {
  field = input<Field<string | number>>();
  id = input<string>();
  label = input('');
  placeholder = input('');
  help = input('');
  type = input<InputType>('text');

  protected controlId = computed(
    () => this.id() ?? this.field()?.().name() ?? 'input',
  );
  protected errorId = computed(() => `${this.controlId()}-error`);
  protected helpId = computed(() => `${this.controlId()}-help`);
}
