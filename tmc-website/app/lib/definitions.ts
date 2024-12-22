export type User = {
    name: string;
    email: string;
    password: string;
};

export type Test = {
    testName: string;
    problems: object[];
    timeLimit: number;
    endDate: string;
    startDate: string;
}