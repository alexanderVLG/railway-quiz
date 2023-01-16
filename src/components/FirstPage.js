import React from "react";
import {Link} from 'react-router-dom';
import logo from '../img-min/logo.png';


export default function FirstPage  ()  {
  return (
    <div className="container">
      <img src={logo} alt="Логотип." />
      <h2><span>В</span><span>и</span><span>к</span><span>т</span><span>о</span><span>р</span><span>и</span><span>н</span><span>а</span></h2>
      <h1>
      <span>«</span><span>Ч</span><span>т</span><span>о</span> <span>м</span><span>ы</span> <span>з</span><span>н</span><span>а</span><span>е</span><span>м</span> <span>о</span> <span>ж</span><span>е</span><span>л</span><span>е</span><span>з</span><span>н</span><span>о</span><span>й</span> <span>д</span><span>о</span><span>р</span><span>о</span><span>г</span><span>е</span><span>?</span><span>»</span> </h1>
      <h2>для детей старшего дошкольного возраста.</h2>
      <p className="first-page__text">Цели и задачи:</p>
      <ol>
        <li>Способствовать закреплению полученных знаний о железной дороге.</li>
        <li>Поддерживать интерес к интеллектуальной деятельности, развитие познавательной активности.</li>
        <li>Стимулировать к самостоятельному поиску необходимой информации,
            решению проблемных ситуаций.
        </li>
      </ol>
      <Link to="quiz" className="first-page__link">Нажми!</Link>
      <p>Выполнила: Воспитатель Детского сада №2 ОАО &#171;РЖД&#187; Файзуллина Л.А.</p>
    </div>
  )
}