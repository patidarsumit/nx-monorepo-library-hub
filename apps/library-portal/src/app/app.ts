import { Component } from '@angular/core';
import { form, required } from '@angular/forms/signals';
import { RouterModule } from '@angular/router';
import {
  Badge,
  Button,
  Card,
  Checkbox,
  Input,
  SearchInput,
  Spinner,
  StatCard,
} from '@library-hub/shared-ui';
import { signal } from '@angular/core';

@Component({
  imports: [
    RouterModule,
    Badge,
    Button,
    Card,
    Checkbox,
    Input,
    SearchInput,
    Spinner,
    StatCard,
  ],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'library-portal';

  protected smokeModel = signal({
    title: '',
    search: '',
    available: true,
  });

  protected smokeForm = form(this.smokeModel, (path) => {
    required(path.title, { message: 'Book title is required' });
  });
}
