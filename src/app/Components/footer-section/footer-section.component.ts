import { Component, OnInit } from '@angular/core';
import { Constants } from '../common/constants';

@Component({
  selector: 'app-footer-section',
  standalone: true,
  imports: [],
  templateUrl: './footer-section.component.html',
  styleUrl: './footer-section.component.css',
})
export class FooterSectionComponent implements OnInit {
  appName: string = 'app-name';
  socials: string[] = [];
  footerLinks: string[] = [];
  ngOnInit() {
    this.getAppName();
    this.getSocials();
    this.getFooterLinks();
  }

  getAppName() {
    this.appName = Constants.APP_NAME;
  }

  getSocials() {
    this.socials = Constants.SOCIALS;
  }

  getFooterLinks() {
    this.footerLinks = Constants.FOOTER_LINKS;
  }
}
