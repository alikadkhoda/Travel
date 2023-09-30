import React from 'react';
import Button from '../components/Button/Button';
import Cards from '../components/Cards/Cards';
import CardsGuide from '../components/Tourism/CardsGuide';


const Tourism = () => {
    return (
        <>
            <div className='tourism' style={{ backgroundImage: 'url(images/tourism.jpg)' }}>
                <h1 style={{ color: '#fff', fontSize: '46px' }}>پرتال جامع گردش و سفر</h1>
                <p>پرتال جامع گردش و سفر</p>
                <div className='tourism-box'>
                    <input type="text" name="search" className='search-input' placeholder='جستجوی کشور، شهر و ...' autoComplete={false} />
                    <Button buttonStyle='btn--search--place' buttonSize='btn--large'>
                        جستجوی
                    </Button>
                </div>
            </div>
            <CardsGuide />
            <Cards/>
        </>

    );
}

export default Tourism;