import { CommonModule, NgSwitch } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent implements OnInit {
  @Input() buttonText: any;
  @Input() theme: string = 'light';

  @ViewChild('kickstartProjectBtn') kickstartProjectBtn!: ElementRef;

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {}

  setTheme() {
    switch (this.theme) {
      case 'dark':
        return 'dark-theme-btn';
      case 'outline-dark':
        return 'outlined-theme-btn-dark';
      case 'outline-light':
        return 'outlined-theme-btn-light';
      default:
        return 'light-theme-btn';
    }
  }
}
