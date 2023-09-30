import React from 'react';
import Button from '../components/Button/Button';
import CardsGuideTour from '../components/Tour/CardsGuideTour';

const Tour = () => {
    return ( 
        <>
        <div className='tourism'>
            <div className='tourism' style={{ backgroundImage: 'url(images/tourism.jpg)' }}>
                
                <p>پرتال جامع گردش و سفر</p>
                <div className='tourism-box'>
                    <input type="text" name="search" className='search-input' placeholder='نام شهر یا کشور' autoComplete={false} />
                    <Button buttonStyle='btn--search--place' buttonSize='btn--large'>
                        جستجو
                    </Button>
                </div>
            </div>
        </div>
        <CardsGuideTour/>
        </>
        
     );
}
 
export default Tour;
