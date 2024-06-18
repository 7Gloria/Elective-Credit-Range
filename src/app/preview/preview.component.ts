import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCourse, coreCourses } from '../model/coreplan';


@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,
    NgbTooltipModule],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.css'
})

export class PreviewComponent {

  corePlan: CoreCourse[]=[];
  isPreview=false;

  constructor() {
    
    this.fetchCoreCourses();
    };

  fetchCoreCourses() {
    // Iterating over the coreCourses array using a for loop
    // for (let i = 0; i < coreCourses.length; i++) {
    //   this.coreplan.emit(coreCourses[i]);
    // }
    this.corePlan=coreCourses;
  }
}
