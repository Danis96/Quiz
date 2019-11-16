import React, { Component } from 'react';
import questions from '../questions';
import QuizQuestions from './QuizQuestions';
import Result from './Result';

class Quiz extends Component {
    state = { 
        questionBank: [],
        score: 0,
        responses: 0
     }

     getQuestions = () => {
         questions().then(question => {
             this.setState({ 
                 questionBank: question
              });
         })
     }

     componentDidMount() {
         this.getQuestions();
     }

     computerAnswer = (answer, correctAnswer) => {
         if(answer === correctAnswer)
         {
             this.setState({ 
                 score: this.state.score + 1
              });
         }

         this.setState({ 
             responses: this.state.responses + 1
          });
     }

     playAgain = () => {
         this.getQuestions();
         this.setState({ 
             score: 0,
             responses: 0
          });
     }

    render() { 
        const {questionBank, responses, score} = this.state;
        return ( 
            <div className='container'>
                 <div className='card'>
                     <div className='card-header'>
                           Questions
                     </div>
                     <div className='card-body'>
                         {questionBank.length > 0 && responses < 5 && questionBank.map(({question, correct, answers, questionId}) => (
                             <QuizQuestions  question={question}
                                             key={questionId}
                                             options={answers}
                                             selected={answer => this.computerAnswer(answer, correct)}
                              />
                         ))}
                         {responses === 5 ? (<Result score={score} playAgain={this.playAgain}  />) : null }
                     </div>
                 </div>
            </div>
         );
    }
}
 
export default Quiz;