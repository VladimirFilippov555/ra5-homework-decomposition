import React from 'react';
import { Props } from '../default/Props';

/* компонент отвечает за добавление одной навигационной ссылки */

const NavItem = ({ text, link }: Props) => {
  return (
    <li className='nav__item'>
      <a href={ link } className='nav__link'>{ text }</a>
    </li>
  );
};

export default NavItem;
