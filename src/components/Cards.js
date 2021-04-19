import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Please feel free to browse this simple yet complex site designed to demonstrate my coding abilities.</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/contact.jpg'
              text='A quick Bio.'
              label='About Me'
              path='/about'
            />
            <CardItem
              src='images/port.jpg'
              text='Here are just a few examples besides of my abilities.'
              label='Coding Skills'
              path='/portfolio'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
