import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-project-templates',
  standalone: true,
  imports: [],
  templateUrl: './project-templates.component.html',
  styleUrl: './project-templates.component.css'
})
export class ProjectTemplatesComponent {
  @Input() projectTemplate: any;
}
