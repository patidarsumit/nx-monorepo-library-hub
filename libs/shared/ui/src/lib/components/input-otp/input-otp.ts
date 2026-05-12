import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { FormField } from '@angular/forms/signals';
import type { Field } from '@angular/forms/signals';

@Component({
  selector: 'lib-input-otp',
  imports: [FormField],
  templateUrl: './input-otp.html',
  styleUrl: './input-otp.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputOtp {
  field = input<Field<string>>();
  id = input<string>();
  label = input('');
  length = input(6);

  protected controlId = computed(
    () => this.id() ?? this.field()?.().name() ?? 'input-otp',
  );
  protected pattern = computed(() => `[0-9]{${this.length()}}`);
}
