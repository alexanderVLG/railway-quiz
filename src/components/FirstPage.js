import React from "react";
import {Link} from 'react-router-dom';
import logo from '../img-min/logo.png';


export default function FirstPage  ()  {
  return (
    <div className="container">
      <img src={logo} alt="Логотип." />
      <h1>Викторина «Что мы знаем о железной дороге?» для детей в подготовительной группе.</h1>
      <p className="first-page__text">Цели и задачи:</p>
      <ol>
        <li>Способствовать закреплению полученных знаний о железной дороге.</li>
        <li>Поддерживать интерес к интеллектуальной деятельности, развитие познавательной активности.</li>
        <li>Стимулировать к самостоятельному поиску необходимой информации,
            решению проблемных ситуаций.
        </li>
      </ol>
      <Link to="quiz" className="first-page__link">Перейти к викторине</Link>
    </div>
  )
}