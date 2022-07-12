import React from "react";
import { QuestionsAnswers } from "./QuestionsAnswers";

export const Result = (props) => {
    const result = props.finalResult;
    let finalScore = 0;
    return result &&
    <div>
        <span className="results_item"><b>Result of the submitted form</b></span>
        <table>
            <tbody>
                <tr>
                    <th>Question</th>
                    <th>Answer</th>
                    <th>Score</th>
                </tr>
                {Object.entries(result).map(([key, value]) => {
                    finalScore += getScore(key, value)
                    return (<tr key={key}>
                        <td>{key}</td>
                        <td>{value}</td>
                        <td>{getScore(key, value)} / 6</td>
                    </tr>)
                })}
            </tbody></table> 
            <br />
            <span className="results_item">Final score is : {finalScore} / {6 * QuestionsAnswers.length}</span>
            </div>
}


const getScore=(key, value)=> {
    const questionToReturnScore = QuestionsAnswers.find((question) => question.question === key)
    const answerIndex = questionToReturnScore.answers.indexOf(value);
    return  questionToReturnScore.score[answerIndex]
}