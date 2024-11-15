import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ProjectTemplatesComponent } from '../../Templates/project-templates/project-templates.component';
import { Constants } from '../common/constants';
import { ButtonComponent } from '../../Templates/button/button.component';
import { PageHeadersComponent } from '../../Templates/page-headers/page-headers.component';
import { CompetitiveCardComponent } from '../../Templates/competitive-card/competitive-card.component';
import { PricingCardComponent } from '../../Templates/pricing-card/pricing-card.component';
import { FaqComponent } from '../../Templates/faq/faq.component';
import { FooterSectionComponent } from '../footer-section/footer-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    CommonModule,
    ProjectTemplatesComponent,
    ButtonComponent,
    PageHeadersComponent,
    CompetitiveCardComponent,
    PricingCardComponent,
    FaqComponent,
    FooterSectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  public projects: string[] = [];
  public templates: string[] = [];
  public headingTemplates:any;
  public missionFrames: any;
  public competitiveCards: any;
  public serviceBtns: any = [];
  public pricingCards: any;

  ngOnInit(): void {
    this.getProjects();
    this.getTemplates();
    this.getHeadingTemplates();
    this.getFrames();
    this.getCompetitiveCards();
    this.getServiceBtns();
    this.getPricingCards();
  }

  getProjects() {
    this.projects = Constants.PROJECTS;
  }

  getTemplates() {
    this.templates = Constants.TEMPLATES;
  }

  getHeadingTemplates(){
    this.headingTemplates = Constants.HEADING_TEMPLATES;
  }

  getFrames() {
    this.missionFrames = Constants.MISSION_FRAMES;
  }

  getCompetitiveCards(){
    this.competitiveCards = Constants.COMPETITIVE_CARDS;
  }

  getServiceBtns(){
    this.serviceBtns  = Constants.SERVICE_BTNS;
  }

  getPricingCards(){
    this.pricingCards = Constants.PRICING_CARDS;
  }

}
