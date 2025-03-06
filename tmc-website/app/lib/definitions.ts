//Define the structure of data that is saved in the database, so I can make sure that data is saved correctly

export type User = {
    user_id: string;
    password: string;
};

export type Test = {
    _id: string;
    testName: string;
    problems: ProblemType[];
    timeLimit: number;
    endDate: string;
    startDate: string;
    type: "individual" | "team";
}

export type ProblemType = {
    problem: string;
    picture: boolean;
}