import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Other Adventure Sports Below</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-10.jpg'
              text='Paradise is anywhere with a kayak.'
            //   label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-12.jpg'
              text='We start in different places, but in the end, we all meet at the waterfall.'
            //   label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-11.jpg'
              text='The journey of a thousand miles begins with a single step.'
            //   label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-14.jpg'
              text='If you’re in control, you’re not going fast enough.'
            //   label='Adventure'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;