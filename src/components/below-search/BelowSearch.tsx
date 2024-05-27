import React from 'react';
import { Props } from '../default/Props';
import Service from './Service';

/*Компонент отвечает за добавление содержимого блока Сервисы */

const BelowSearch = ( {}: Props ) => {
  return (
    <section className='below-search'>
      <h2 hidden>Search</h2>
      <Service title='Погода' serviceItems={['Утром, днём']} link='#0' src='#0'/>
      <Service title='Посещаемое' serviceItems={['Недвижимость', 'Маркет', 'Авто.ру']} link='#0'/>
      <Service title='Карта Германии' serviceItems={['Расписание']} link='#0'/>
      <Service title='Телепрограмма' serviceItems={['ТНТ.Best', 'Джинглики', 'Наедине со всеми']} link='#0'/>
      <Service title='Эфир' serviceItems={['Управление как искусство', 'Ночь. Мир в это время', 'Андрей Возн...']} link='#0'/>
    </section>
  );
};

export default BelowSearch;
