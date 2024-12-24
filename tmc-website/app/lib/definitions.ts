export type User = {
    name: string;
    email: string;
    password: string;
};

export type Test = {
    _id: string;
    testName: string;
    problems: ProblemType[];
    timeLimit: number;
    endDate: string;
    startDate: string;
}

export type ProblemType = {
    problem: string;
    picture: boolean;
}