import { AsyncPipe, CommonModule, DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgbHighlight, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from '../app.component';
import { StudentInfo } from '../model/interface';
import { studentInfo } from '../model/studentdetails';



@Component({
  selector: 'app-credit-form',
  standalone: true,
  imports: [AppComponent, RouterOutlet, CommonModule, NgbNavModule, DecimalPipe, AsyncPipe, ReactiveFormsModule, NgbHighlight],
  templateUrl: './credit-form.component.html',
  styleUrls: ['./credit-form.component.css']
})
export class CreditFormComponent {
  @Input({ required: true })
  totalCredits: StudentInfo[] = [];
  basket = ['PME', 'SME', 'OE', 'HSE', 'PROJECT']
  item: any;
  students: StudentInfo[] = studentInfo;
  isBool = false;
  selectedTab: string = ' ';
  
  minCredits: number[] = [];
  maxCredits: number[] = [];
 valid = false;
 req = 20;
  constructor() {
    this.students.forEach(student => {
      student.electiveCredits.forEach(elective => {
        this.minCredits.push(elective.minCredits);
        this.maxCredits.push(elective.maxCredits);
      });
    });
  }

  addMinCredit(minCredit: number, index: number) {
    this.minCredits[index] = minCredit;
  }

  get totalMinCredits() {
    return this.minCredits.reduce((a, b) => a + b, 0);
  }

  addMaxCredit(maxCredit: number, index: number) {
    this.maxCredits[index] = maxCredit;
  }

  saveToFile(data: any, filename: string) {
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    window.URL.revokeObjectURL(url);
  }

  onsubmit(ev?: SubmitEvent) {
    if (this.isBool && this.valid) {
      const studentData = this.students.map(student => ({
        ...student,
      electiveCredits: this.basket.map((basket, index) => ({
        basket,
        minCredits: this.minCredits[index],
        maxCredits: this.maxCredits[index]
      }))
      }));
      this.saveToFile(studentData, 'elective-credits.json');
      console.log('Form Submitted');
      return;
    } else {
      const studentData = {};
      console.log(studentData);
      console.log('Form is invalid or total credits not satisfied');
    }
  }

  onclicking(studentInfo: StudentInfo[]): void {
    this.valid = false;
    console.log(this.minCredits);
    
    for (let i = 0; i < this.basket.length; i++) {
      if (this.minCredits[i] < this.maxCredits[i] && this.minCredits[i]!==null && this.maxCredits[i] <= 6 && this.maxCredits[i]!==null && this.minCredits[i] <= 6) {
        this.valid = true;
        // console.log('Form is valid');
        break;
      }
    }
    if (this.valid) {
      studentInfo.forEach(student => {
        const total = student.totalCredits + this.totalMinCredits;
       
        if (total >= this.req) {
          this.isBool = true;
        } else {
          this.isBool = false;
          console.log('You need to select more credits');
        }
      });
    } else {
      this.isBool = false;
    }

    this.onsubmit();
  }


  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}
