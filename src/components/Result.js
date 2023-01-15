import React from "react";

export default function Result({correct}) {
  return (
    <div className="result__container">
      <h2>М<span>о</span><span>л</span><span>о</span><span>д</span><span>е</span><span>ц</span><span>!</span></h2>
      <img src="https://media.giphy.com/media/40bCPwMAsIhfA8KoPA/giphy.gif" alt="Рисунок машиниста поезда"/>
      <div className="result">
        <a href='/'>
          <button>Попробовать снова</button>
        </a>  
      </div>
    </div>
  );
}