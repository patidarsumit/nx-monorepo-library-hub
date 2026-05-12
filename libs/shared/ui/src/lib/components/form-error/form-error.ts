import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import type { Field } from '@angular/forms/signals';

@Component({
  selector: 'lib-form-error',
  imports: [],
  templateUrl: './form-error.html',
  styleUrl: './form-error.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormError {
  field = input<Field<unknown>>();
  id = input<string>();
  message = input('');

  protected messages = computed(() => {
    const explicitMessage = this.message();

    if (explicitMessage) {
      return [explicitMessage];
    }

    const field = this.field();
    const state = field?.();

    if (!state || !state.invalid() || (!state.touched() && !state.dirty())) {
      return [];
    }

    return state.errors().map((error) => this.toMessage(error));
  });

  private toMessage(error: unknown): string {
    if (typeof error === 'string') {
      return error;
    }

    if (error && typeof error === 'object' && 'message' in error) {
      return String(error.message);
    }

    return 'Please check this field.';
  }
}
