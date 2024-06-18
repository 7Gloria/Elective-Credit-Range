import { Component } from '@angular/core';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCourse, coreCourses } from '../model/coreplan';


@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,
=======
import { RouterOutlet } from '@angular/router';
import { AppComponent } from '../app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCourse, coreCourses } from '../model/coreplan';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [RouterOutlet,AppComponent,ReactiveFormsModule,
>>>>>>> d9b2aec434f55423d906c01e7f1765cd81a957a0
    NgbTooltipModule],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.css'
})

export class PreviewComponent {

  corePlan: CoreCourse[]=[];
  isPreview=false;

<<<<<<< HEAD
  constructor() {
    
=======
  constructor(){
>>>>>>> d9b2aec434f55423d906c01e7f1765cd81a957a0
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
