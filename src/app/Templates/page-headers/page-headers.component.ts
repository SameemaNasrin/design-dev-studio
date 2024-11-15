import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-page-headers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-headers.component.html',
  styleUrl: './page-headers.component.css',
})
export class PageHeadersComponent implements OnInit {
  @Input() greenText: any;
  @Input() headingText: any;
  @Input() subHeadingText: any;
  @Input() theme: string = 'light';

  ngOnInit(): void {}
}
