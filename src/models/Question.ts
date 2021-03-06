export interface MultipleAnswerQuestion {
    questionType: string,
    body: string,
    answerA: string,
    answerB: string,
    answerC: string,
    answerD: string,
    correctAnswer: string,
    category: string
}

export interface RangeQuestion {
    questionType: string,
    body: string,
    correctAnswer: number,
    category: string
}