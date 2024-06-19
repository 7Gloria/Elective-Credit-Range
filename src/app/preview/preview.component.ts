import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCourse, coreCourses } from '../model/coreplan';
import { ElectiveCredits } from '../model/interface';


@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,
    NgbTooltipModule],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.css'
})

export class PreviewComponent implements OnInit {

  corePlan: CoreCourse[]=[];
  credits: ElectiveCredits[] = [];
  isPreview=false;

  constructor() {
    
    this.fetchCoreCourses();
    }ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
;

  fetchCoreCourses() {
    // Iterating over the coreCourses array using a for loop
    // for (let i = 0; i < coreCourses.length; i++) {
    //   this.coreplan.emit(coreCourses[i]);
    // }
    this.corePlan=coreCourses;
  }

  loadStudentData() {
    fetch('assets/elective-credits.json')
      .then(response => response.json())
      .then(data => {
        this.credits = data;
      })
      .catch(error => console.error('Error loading student data:', error));
  }
}
