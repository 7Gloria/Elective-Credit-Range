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
    creditRange: Range;
    cgpa: number;
    atRisk: boolean;
    totalCredits: number;
    electiveCredits: ElectiveCredits[];
  }

  export interface Range {
    max: number;
    min: number;
  }