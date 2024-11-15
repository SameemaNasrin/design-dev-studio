import { Component, HostListener, OnInit } from '@angular/core';
import { Constants } from '../common/constants';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css',
})
export class TopNavComponent implements OnInit {
  appName: string = 'app-name';
  NavLinks: string[] = [];
  isHidden = false;
  lastScrollTop = 0;

  ngOnInit() {
    this.getAppName();
    this.getNavButtons();
  }

  constructor() {}

  getAppName() {
    this.appName = Constants.APP_NAME;
  }

  getNavButtons() {
    this.NavLinks = Constants.NAV_LINKS;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollTop =
    window.pageYOffset || document.documentElement.scrollTop;
    
    console.log(currentScrollTop > this.lastScrollTop);
    if (currentScrollTop > this.lastScrollTop) {
      this.isHidden = true;
    } else {
      this.isHidden = false;
    }
    this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  }
}
