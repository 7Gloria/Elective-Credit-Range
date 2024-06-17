import { StudentInfo } from './interface';

export const studentInfo: StudentInfo[] = [
  {
    studentName: 'John Doe',
    rollNo: '123456',
    program: 'Computer Science',
    branch: 'Software Engineering',
    semester: 3,
    cgpa: 3.5,
    atRisk: false,
    totalCredits: 18,
    electiveCredits: [
      {
        basket: ['Elective 1', 'Elective 2'],
        minCredits: 0,
        maxCredits: 0,
      },
      {
        basket: ['Elective 3', 'Elective 4'],
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
    cgpa: 3.5,
    atRisk: false,
    totalCredits: 18,
    electiveCredits: [
      {
        basket: ['Elective 1', 'Elective 2'],
        minCredits: 0,
        maxCredits: 0,
      },
      {
        basket: ['Elective 3', 'Elective 4'],
        minCredits: 0,
        maxCredits: 0,
      },
    ],
  },
];
