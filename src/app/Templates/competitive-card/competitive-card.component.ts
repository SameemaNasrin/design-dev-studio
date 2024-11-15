import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-competitive-card',
  standalone: true,
  imports: [],
  templateUrl: './competitive-card.component.html',
  styleUrl: './competitive-card.component.css'
})
export class CompetitiveCardComponent {
  @Input() competitiveCard:any;
}
