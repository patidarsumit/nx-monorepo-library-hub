import { ChangeDetectionStrategy, Component, input } from '@angular/core';

type CardTone = 'default' | 'muted' | 'interactive';

@Component({
  selector: 'lib-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {
  tone = input<CardTone>('default');
}
