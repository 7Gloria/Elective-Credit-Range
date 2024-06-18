import { Range, StudentInfo } from './interface';

export const studentInfo: StudentInfo[] = [
  {
    studentName: 'John Doe',
    rollNo: '123456',
    program: 'Computer Science',
    branch: 'Software Engineering',
    semester: 3,
    creditRange: { min: 0, max: 0 },
    cgpa: 3.5,
    atRisk: false,
    totalCredits: 18,
    electiveCredits: [
      {
        basket: [],
        minCredits: 0,
        maxCredits: 0,
      },
      {
        basket: [],
        minCredits: 0,
        maxCredits: 0,
      },
    ],
  },

  {
    studentName: 'John Doe',
    rollNo: '123456',
    program: 'Computer Science',
    branch: 'Software Engineering',
    semester: 3,
    creditRange: { min: 0, max: 0 },
    cgpa: 3.5,
    atRisk: false,
    totalCredits: 18,
    electiveCredits: [
      {
        basket: [],
        minCredits: 0,
        maxCredits: 0,
      },
      {
        basket: [],
        minCredits: 0,
        maxCredits: 0,
      },
    ],
  },
];

export const creditrange: Range = {
  "max": 24,
  "min": 9
}