import React from 'react'
import { cocktailLists } from '../../constants/index';

const Cocktails = () => {
  return (
    <section id='cocktails' className='noisy'>
      <img 
        src='/images/cocktail-left-leaf.png'
        alt='l-leaf'
        className='c-left-leaf'
      />
      <img 
        src='/images/cocktail-right-leaf.png'
        alt='r-leaf'
        className='c-right-leaf'
      />

      <div className="list">
        <div className="popular">
          <h2>Most popular cocktails:</h2>
          <ul>
            
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Cocktails