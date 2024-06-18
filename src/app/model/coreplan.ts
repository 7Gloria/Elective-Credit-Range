// course.model.ts

// Define the interface for a course
export interface CoreCourse {
    code: string;
    name: string;
    credits: number;
    slot: string;
}

// Define and export the coreCourses array with additional courses
export const coreCourses: CoreCourse[] = [
    {
        code: "MAT101",
        name: "Calculus I",
        credits: 4,
        slot: "A"
    },
    {
        code: "PHY102",
        name: "Physics II",
        credits: 3,
        slot: "B"
    },
    {
        code: "CS3000",
        name: "C Programming",
        credits: 4,
        slot: "A"
    },
    {
        code: "CS500X",
        name: "Web Programming",
        credits: 3,
        slot: "B"
    },
    {
        code: "PHY101",
        name: "Physics I",
        credits: 4,
        slot: "A"
    },
    {
        code: "CHEM101",
        name: "Chemistry I",
        credits: 3,
        slot: "B"
    },
    {
        code: "RES301",
        name: "Research Methodology",
        credits: 5,
        slot: "C"
    },
    {
        code: "DS101",
        name: "Data Science Fundamentals",
        credits: 4,
        slot: "D"
    },
    {
        code: "BIO101",
        name: "Biology Basics",
        credits: 3,
        slot: "A"
    },
    {
        code: "CHEM102",
        name: "Chemistry II",
        credits: 4,
        slot: "B"
    }
];
