import { Range, StudentInfo } from './interface';

export const studentInfo: StudentInfo[] = [
  {
    basket:'PME',
    studentName: 'John Doe',
    rollNo: '123456',
    program: 'Computer Science',
    branch: 'Software Engineering',
    semester: 3,
    creditrange: { min: 0, max: 0},
    cgpa: 3.5,
    atRisk: false,
    totalCredits: 18,
    electiveCredits: [],
  },

  {
    basket:'SME',
    studentName: 'John Doe',
    rollNo: '123456',
    program: 'Computer Science',
    branch: 'Software Engineering',
    semester: 3,
    creditrange: { min: 0, max: 0 },
    cgpa: 3.5,
    atRisk: false,
    totalCredits: 18,
    electiveCredits: [],
  },
];

export const creditrange: Range = {
  "max": 24,
  "min": 9
}