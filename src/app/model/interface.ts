 export interface ElectiveCredits {
	basket: string[];
	minCredits: number;
  maxCredits: number;
}

export interface StudentInfo {
    studentName: string;
    rollNo: string;
    program: string;
    branch: string;
    semester: number;
    cgpa: number;
    atRisk: boolean;
    totalCredits: number;
    electiveCredits: ElectiveCredits[];
  }