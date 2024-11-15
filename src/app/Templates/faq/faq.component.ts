import { Component, OnInit, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Constants } from '../../Components/common/constants';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FaqComponent implements OnInit {
  readonly panelOpenState = signal(false);

  faqs: any;

  ngOnInit() {
    this.getFaqs();
  }

  getFaqs(){

    this.faqs = Constants.FAQS;
  }
  
}
