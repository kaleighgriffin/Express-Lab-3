import Assignment from "./assignment";

export const assignments: Assignment[] = [
    {
        id:1,
        name: "Lab 1",
        score: 8,
        total: 10,
        completed: true
    },
    {
        id:2,
        name: "Lab 2",
        score: 10,
        total: 10,
        completed: true
    },
    {
        id:3,
        name: "Practice",
        score: 7,
        total: 10,
        completed: false
    },
    {
        id:4,
        name: "Extra Credit",
        score: 6,
        total: 20,
        completed: false
    },
    {
        id:5,
        name: "Quiz",
        score: 85,
        total: 100,
        completed: true
    },
];

let nextId = 5;

export const pushAssignment = (assignment: Assignment):void => {
    assignment.id = nextId;
    nextId++;
    assignments.push(assignment);
};

export function readAssignmentById(id: number): Assignment|undefined {
    return assignments.find(assignments => assignments.id === id);
};

export function deleteAssignment(id: number): boolean {
    const index = assignments.findIndex(assignments => assignments.id === id);
    if (index == -1) {
        return false;
    } else {
        assignments.splice(index, 1);
        return true;
    }
};

export function updateAssignment(assignment: Assignment): boolean {
    const index = assignments.findIndex(p => p.id === assignment.id);
    if (index == -1) {
      return false;
    } else {
      assignments[index] = assignment;
      return true;
    }
};

export function findAverage(assignments: Assignment[]): string {
    let total = 0;
    let assignmentTotal = 0;
    for (let assignment of assignments) {
        let scores = assignment.score;
        total += scores;
        let totals = assignment.total;
        assignmentTotal += totals;
    }
    let average = total / assignmentTotal * 100;
    let displayAverage = average.toFixed(2);
    return displayAverage;
}

// export const displayAssignments = (): Assignment[] => {
//     return assignments;
// };