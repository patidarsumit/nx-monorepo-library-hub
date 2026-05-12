import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { FormField } from '@angular/forms/signals';
import type { Field } from '@angular/forms/signals';

@Component({
  selector: 'lib-textarea',
  imports: [FormField],
  templateUrl: './textarea.html',
  styleUrl: './textarea.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Textarea {
  field = input<Field<string>>();
  id = input<string>();
  label = input('');
  placeholder = input('');
  help = input('');
  rows = input(4);

  protected controlId = computed(
    () => this.id() ?? this.field()?.().name() ?? 'textarea',
  );
  protected helpId = computed(() => `${this.controlId()}-help`);
}
