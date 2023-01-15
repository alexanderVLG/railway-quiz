import React, { useState } from "react";
import { questions } from "../questions";

export default function Game({ step, question, onClickVariant}) {
  const percentage = Math.round((step / questions.length * 100));
  const [isValid, setIsValid] = useState();


  const checkIsValid = (number) => {
    if(number === question.correct) {
      setIsValid()
    } else {
      setIsValid(number)
    }
  }

  return (
    <>
      <img src={question.image} alt={question.title} />
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) =>
          <li
            className={isValid === index ? 'wrong' : ''}
            onClick={() => {
              onClickVariant(index)
              checkIsValid(index)
            }}
            key={index}
          >{text}</li>  
        )}
      </ul>
    </>
  );
}