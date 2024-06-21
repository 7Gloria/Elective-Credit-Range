import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  NgModule,
  OnInit,
  Pipe,
  PipeTransform,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import {
  FormsModule,
  NgForm,
  NgModel,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { NgbNavModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ElectiveCredits, StudentInfo } from '../model/interface';
import { studentInfo } from '../model/studentdetails';
import { CoreCourse, coreCourses } from '../model/coreplan';
import { creditrange } from '../model/studentdetails';
@Component({
  selector: 'app-credit-form',
  standalone: true,
  imports: [
    CommonModule,
    NgbNavModule,
    ReactiveFormsModule,
    RouterOutlet,
    FormsModule,
    RouterModule,
  ],
  templateUrl: './credit-form.component.html',
  styleUrls: ['./credit-form.component.css'],
})
export class CreditFormComponent {
  @Input({ required: true })
  totalCredits: StudentInfo[] = [];
  basket = ['PME', 'SME', 'OE', 'HSE', 'PROJECT'];
  item: any;
  students: StudentInfo = studentInfo[0];
  isBool = false;
  selectedTab: string = 'DeclareElectives';
  minCredits: number[]=[];
  maxCredits: number[]=[];
  valid = false;
  formErrors: string[] = [];
  isBoolean = false;
  corePlan: CoreCourse[] = [];
  min = creditrange.min;
  max = creditrange.max;
  
  @ViewChildren('minCredit, maxCredit')
  inputs!: QueryList<ElementRef>;
  electiveCredits: ElectiveCredits[] = [];


  constructor() {
    for(let i=0;i<this.basket.length;i++){
      this.minCredits[i]=0;
      this.maxCredits[i]=0;

    }
    this.fetchCoreCourses();
      this.students.electiveCredits.forEach((student) => {
        this.minCredits.push(student.minCredits);
        this.maxCredits.push(student.maxCredits);
    });
  }

  fetchCoreCourses() {
    this.corePlan = coreCourses;
  }

  addMinCredit(minCredit: number, index: number) {
    this.minCredits[index] = minCredit;
    this.validateForm();
  }

  
  get totalMinCredits() {
    return this.minCredits.reduce((a, b) => a + b, 0);
  }

  get totalMaxCredits() {
    return this.maxCredits.reduce((a, b) => a + b, 0);
  }


  addMaxCredit(maxCredit: number, index: number) {
    this.maxCredits[index] = maxCredit;
    this.validateForm();
  }




  validateForm() {
    this.valid = false;
    this.formErrors = [];

    

    for (let i = 0; i < this.basket.length; i++) {
      if(this.maxCredits[i] > this.max ){
        this.formErrors.push(`You are not allowed to exceed the limit of maximum.`)
      }

      if (this.maxCredits[i]!=0 && this.minCredits[i] ==0 ) {
        this.formErrors.push(`Minimum credits criteria for ${this.basket[i]} is not entered.`);
        }
    
     
        if (this.minCredits[i] > this.maxCredits[i]) {
          this.formErrors.push(
            `Min credit cannot be greater than Max credit for ${this.basket[i]}.`
          );
        }
  
        if (this.formErrors.length > 0) {
          this.valid = false;
        } else {
          this.valid = true;
        }  
    }

    if(this.valid) {
      let totalValid = false;
        const total = this.students.totalCredits + this.totalMinCredits;
        if (
          total >= this.min &&
          this.totalMinCredits <= this.max
        ) {
          console.log('hi');
          this.isBool = true;
          totalValid = true;
        }
      if (!totalValid) {
        this.isBool = false;
        this.formErrors.push(`Total credits exceed the allowed limit of minimum credits.`);
      }
    }
  }


  onsubmit(ev?: SubmitEvent) {
 
    //  If student don't want to take any elective courses 

    if(this.totalMinCredits == 0 && this.totalMaxCredits == 0)
      {
        this.isBool=true;
        this.valid=true;
        this.isBoolean = true;
       
      }


    if (this.isBool && this.valid) {
      const electiveCredits = this.basket.map((basket, index) => ({
        basket,
        minCredits: this.minCredits[index],
        maxCredits: this.maxCredits[index],
      }));
      this.isBoolean = true;
      // this.saveToFile(electiveCredits,'data.json');
      console.log('Form Submitted', electiveCredits);
    } else {
      this.isBoolean = false;
      console.log('Form is invalid or total credits not satisfied');
    }
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  onKeydown(event: KeyboardEvent, index: number, type: 'min' | 'max') {
    if (event.key === 'Enter') {
      event.preventDefault();
      const inputsArray = this.inputs.toArray();
      const currentIndex = index * 2 + (type === 'max' ? 1 : 0);
      const nextInput = inputsArray[currentIndex + 1];
      if (nextInput) {
        nextInput.nativeElement.focus();
      }
    }
  }

  // saveToFile(data: any, filename: string) {
  //   const json = JSON.stringify(data, null, 2);
  //   const blob = new Blob([json], { type: 'application/json' });
  //   const url = window.URL.createObjectURL(blob);
  //   const link = document.createElement('a');
  //   link.href = url;
  //   link.download = filename;
  //   link.click();
  //   window.URL.revokeObjectURL(url);
  // }

}
