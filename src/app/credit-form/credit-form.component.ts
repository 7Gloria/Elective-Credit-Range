import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentInfo } from '../model/interface';
import { studentInfo } from '../model/studentdetails';
import { PreviewComponent } from '../preview/preview.component';

@Component({
  selector: 'app-credit-form',
  standalone: true,
  imports: [
    CommonModule,
    NgbNavModule,
    ReactiveFormsModule,
    RouterOutlet,
    RouterModule,
    PreviewComponent,
  ],
  templateUrl: './credit-form.component.html',
  styleUrls: ['./credit-form.component.css'],
})
export class CreditFormComponent implements OnInit {
  @Input({ required: true })
  totalCredits: StudentInfo[] = [];
  basket = ['PME', 'SME', 'OE', 'HSE', 'PROJECT'];
  item: any;
  students: StudentInfo[] = studentInfo;
  isBool = false;
  selectedTab: string = 'DeclareElectives';

  minCredits: number[] = [];
  maxCredits: number[] = [];
  valid = false;
  req = 30;
  formErrors: string[] = [];
  limit = 0;
  // CredRange = this.students[0].creditRange;

  @ViewChildren('minCredit, maxCredit')
  inputs!: QueryList<ElementRef>;
  sum: number[] | undefined;
  // router: any;

  constructor(private router: Router) {
    this.students.forEach((student) => {
      student.electiveCredits.forEach((elective) => {
        this.minCredits.push(elective.minCredits);
        this.maxCredits.push(elective.maxCredits);
      });
    });
  }

  ngOnInit() {
    this.setLimitFromStudentInfo();
  }

  setLimitFromStudentInfo() {
    if (this.students.length > 0) {
      this.limit = this.students[0].creditRange.max; // Assume all students have the same limit
    }
  }

  addMinCredit(minCredit: number, index: number) {
    this.minCredits[index] = minCredit;
  }

  get totalMinCredits() {
    return this.minCredits.reduce((a, b) => a + b, 0);
  }

  addMaxCredit(maxCredit: number, index: number) {
    this.maxCredits[index] = maxCredit;
    this.onclicking(this.students);
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
      const studentData = this.students.map((student) => ({
        ...student,
        electiveCredits: this.basket.map((basket, index) => ({
          basket,
          minCredits: this.minCredits[index],
          maxCredits: this.maxCredits[index],
        })),
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
    this.formErrors = [];

    console.log(this.minCredits);

    for (let i = 0; i < this.basket.length; i++) {
      //  var  sum = this.maxCredits.reduce((a, b) => a + b, 0);
      if (this.minCredits[i] === null && this.maxCredits[i] === null) {
        console.log('Please enter values for all Min and Max credits.');
        this.formErrors.push(
          `Please enter values for all Min and Max credits.`
        );
      } else if (this.minCredits[i] > this.maxCredits[i]) {
        console.log(
          `Min credit cannot be greater than Max credit for ${this.basket[i]}.`
        );
        this.formErrors.push(
          `Min credit cannot be greater than Max credit for ${this.basket[i]}.`
        );
      }

      // else if (this.minCredits[i] > this.limit || this.maxCredits[i] > this.limit) {
      //   console.log(`Credits for ${this.basket[i]} cannot exceed limit.`);
      //   this.formErrors.push(`Credits for ${this.basket[i]} cannot exceed limit.`);
      // }

      // else if (this.maxCredits.some(credit => credit > sum)){
      //   console.log(`Total credits cannot exceed limit.`);
      //   this.formErrors.push(`Total credits cannot exceed limit.`);
      // }

      if (
        this.maxCredits[i] <= this.limit &&
        this.maxCredits[i] > 0 &&
        this.minCredits[i] <= this.limit &&
        this.minCredits[i] > 0
      ) {
        this.valid = true;
        // console.log('Form is valid');
      }

      if (this.formErrors.length > 0) {
        this.valid = false;
      } else {
        this.valid = true;
      }
    }
    if (this.valid) {
      let totalValid = false;
      studentInfo.forEach((student) => {
        const total = student.totalCredits + this.totalMinCredits;

        if (total >= this.req) {
          this.isBool = true;
          totalValid = true;
        }
      });
      if (!totalValid) {
        this.isBool = false;
        this.formErrors.push(`Total credits must be at least ${this.req}.`);
        console.log('You need to select more credits');
      }
    } else {
      this.isBool = false;
    }

    this.onsubmit();
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

  preview() {
    this.router.navigate(['/preview']);
  }
}
