export interface Theme {
    id: string;
    name: string;
    color: string;
    icon: string;
    questions: Question[];
}

interface Question {
    id: string;
    question: string;
    options: Options[];
    answer: string;
}

interface Options {
    id: string;
    option: string;
}
