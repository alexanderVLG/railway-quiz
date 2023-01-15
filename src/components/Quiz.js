import React, {useState} from "react";
import Game from './Game';
import Result from './Result';
import { questions } from '../questions';


export default function Quiz () {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0)
  const question = questions[step];


  const onClickVariant = (index) => {

    if(index === question.correct) {
      setStep(step + 1);
      setCorrect(correct + 1);
    }
  }
  return (
    <article className='quiz__container'>
      <div className="quiz">
        {
          step !== questions.length 
            ? (<Game step={step} question={question} onClickVariant={onClickVariant} />)
            : (<Result correct={correct} />)
        }
      </div>
    </article>
  );
}

