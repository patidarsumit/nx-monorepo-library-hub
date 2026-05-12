import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { FormField } from '@angular/forms/signals';
import type { Field } from '@angular/forms/signals';

@Component({
  selector: 'lib-search-input',
  imports: [FormField],
  templateUrl: './search-input.html',
  styleUrl: './search-input.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInput {
  field = input<Field<string>>();
  id = input<string>();
  placeholder = input('Search');

  protected controlId = computed(
    () => this.id() ?? this.field()?.().name() ?? 'search-input',
  );
}
