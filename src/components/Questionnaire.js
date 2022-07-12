import React, { Component } from "react";
import { QuestionsAnswers } from "./QuestionsAnswers";


class Questionnaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionAnswers: QuestionsAnswers
            , selectedOption: {}
        };

    }

    onChangeValue = (event) => {
        this.state.selectedOption[event.target.id] = event.target.value
        this.setState({ selectedOption: this.state.selectedOption })
    }

    formSubmit = (event) => {
        event.preventDefault();
        this.props.setFinalResult(this.state.selectedOption)
        this.setState({ selectedOption: {} })

    }

    render() {
        return (
            <form className="questionnaire_form" onSubmit={this.formSubmit}>
                {

                    this.state.questionAnswers.map(({ question, answers }, index) =>
                        <div className="questionnaire_form_questions" key={index}>
                            Q {index+1}. {question}
                            {answers.map((answer, index) => <div key={index} className="radio"><label>
                                <input
                                    id={question}
                                    type="radio"
                                    value={answer}
                                    checked={this.state.selectedOption[question] === answer}
                                    onChange={this.onChangeValue}
                                />{answer}
                            </label></div>)
                            }
                        </div>
                    )}

                <button disabled={Object.keys(this.state.selectedOption).length !== QuestionsAnswers.length} className="btn btn-default" type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Questionnaire;