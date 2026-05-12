import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import type { Field as SignalField } from '@angular/forms/signals';

type FieldState = 'default' | 'invalid';

@Component({
  selector: 'lib-field',
  imports: [],
  templateUrl: './field.html',
  styleUrl: './field.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Field {
  field = input<SignalField<unknown>>();
  label = input('');
  help = input('');
  error = input('');
  id = input<string>();
  state = input<FieldState>('default');

  protected controlId = computed(() => this.id() ?? this.field()?.().name());

  protected isInvalid = computed(() => {
    const fieldState = this.field()?.();

    return (
      this.state() === 'invalid' ||
      !!(fieldState?.invalid() && (fieldState.touched() || fieldState.dirty()))
    );
  });

  protected isRequired(): boolean {
    return this.field()?.().required() ?? false;
  }
}
