import React from 'react';
import Button from '../Button/Button';
import './HeroSection.css'

const HeroSection = () => {
    return ( 
        <div className='hero-container'>
           <video src='/videos/1.mp4' autoPlay loop muted />
            <div className='hero-buttons'>
               <input className='search-input' type="text" placeholder='جستجوی مکان،شهر،کشور و ...' autoComplete={false} />
               <Button buttonStyle='btn--search'>
                  جستجو
               </Button>
            </div>
          
        </div>
     );
}
 
export default HeroSection;