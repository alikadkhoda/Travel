import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './CardsGuideTour.css'
const CardsGuideTour = () => {
    return ( 
        <>
        <div className='container'>
            <div className='tour__tabs'>
                <div className='tour__wrapper'>
                    <ul className='nav-tabs'>
                        <li>
                            <Link to='' className='anchor'><h5>تمام تورها</h5></Link>
                        </li>
                        <li>
                            <Link to='' className='anchor'><h5>تورهای خارجی</h5></Link>
                        </li>
                        <li>
                            <Link to='' className='anchor'><h5>تورهای داخلی</h5></Link>
                        </li>
                        <li>
                            <Link to='' className='anchor'><h5>تور یک روزه</h5></Link>
                        </li>
                        <li>
                            <Link to='' className='anchor'><h5>تور چند روزه</h5></Link>
                        </li>
                        <li>
                            <Link to='' className='anchor'><h5>تور طبیعت گردی</h5></Link>
                        </li>
                        <li>
                            <Link to='' className='anchor'><h5>تور ماجراجویانه</h5></Link>
                        </li>
                        <li>
                            <Link to='' className='anchor'><h5>تمام تورها</h5></Link>
                        </li>
                        <li>
                            <Link to='' className='anchor'><h5>تورهای خارجی</h5></Link>
                        </li>
                        <li>
                            <Link to='' className='anchor'><h5>تورهای داخلی</h5></Link>
                        </li>
                        <li>
                            <Link to='' className='anchor'><h5>تور یک روزه</h5></Link>
                        </li>
                        <li>
                            <Link to='' className='anchor'><h5>تور چند روزه</h5></Link>
                        </li>
                        <li>
                            <Link to='' className='anchor'><h5>تور طبیعت گردی</h5></Link>
                        </li>
                        <li>
                            <Link to='' className='anchor'><h5>تور ماجراجویانه</h5></Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
        <div className='tour__tabs'>
            <div className='tab-content'>
                <div className='tab-pane'>
                    <header className='tab-header'>
                        <div className='tab-text'>
                            تور
                        </div>
                        <div className='tab-sort-filter tab-text'>
                            مرتب شده بر اساس 
                            <span className='selectTours'>
                                <select className='tab-sort-input'>
                                    <option value="newest">جدیدترین‌ها</option>
                                    <option value="cheapest">ارزانترین‌ها</option>
                                    <option value="viewCount">پر بازدید ترین‌ها</option>
                                </select>
                            </span>
                        </div>
                    </header>
                    <div className='tabs-content'>
                        <ul>
                            <li>
                                <Link to={'/'} className='anchor'>
                                    <span>تور کیش 2روز و 3شب</span>
                                    <p>از 1.600.000</p>
                                    <p>از 2 آذر 1399 الی 4 آذر 1399</p>
                                    <p>شرکت خدمات سفر تعطیلات</p>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/'} className='anchor'>
                                    <span>تور کیش 2روز و 3شب</span>
                                    <p>از 1.600.000</p>
                                    <p>از 2 آذر 1399 الی 4 آذر 1399</p>
                                    <p>شرکت خدمات سفر تعطیلات</p>
                                </Link>
                            </li>
                        </ul>
                        <div className='more-tour-button'>
                            <Button buttonStyle='btn--tour' buttonSize='btn--large'>تورهای بیشتر</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default CardsGuideTour;