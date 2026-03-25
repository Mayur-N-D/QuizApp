import React, {useState} from 'react';
import './Quiz.css';
import QuestionsList from './QuestionsList';

export default function Quiz() {
   const Questions = [
    {
      question: "What is npm?",
      options: ["node package manager", "error", "All of the above"],
      answer: "node package manager"
    },
    {
      question: "What is the capital of India?",
      options: ["Paris", "London", "New Delhi", "Madrid"],
      answer: "New Delhi"
    },
    {
      question: "What is 2 +2?",
      options: ["8", "4", "10", "16"],
      answer: "4"
    }
  ]

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleClick = (option) => {
    setCurrentAnswer(option);
    if(option === Questions[currentQuestionIndex].answer){
      setScore(score + 1);
    }
  }
  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setCurrentAnswer(null);
  }
  return (
    <div>
      {currentQuestionIndex < Questions.length ? 
      <div>       
        <QuestionsList
          question={Questions[currentQuestionIndex].question}
          options={Questions[currentQuestionIndex].options}
          handleClick= {handleClick} currentAnswer={currentAnswer}
        />
        <button disabled={currentAnswer === null} className={currentAnswer === null ? 'button-disabled' : 'button'} onClick={handleNextQuestion}>
          Next Question
        </button>
      </div> : <div>You Score is {score}</div>}
    </div>
  )
}
