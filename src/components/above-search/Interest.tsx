import React from 'react';
import { Props } from '../default/Props';

/* Компонент отвечает за добавлепние блока рекламной информации, 
расположенного в правом верхнем углу страницы */

const Interest = ({ title, text, link, src }: Props) => {
  return (
    <article className='interest'>
      <h2 hidden>Interest</h2>
      <div className='interest__wrapper'>
        <img className='interest__preview' src={ src } alt='#image#'></img>
        <a href={ link } className='interest__title'>{ title }</a>
        <p className='interest__text'>{ text }</p>
      </div>
    </article>
  );
};

export default Interest;
