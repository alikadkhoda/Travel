import React from 'react';
import './CardsGuide.css'

const CardItem = ({src , alt , title , text}) => {
    return ( 
        <li className='cards__item'>
            <div className='compare-item'>
                <div className='compare-image-list'>
                    <img src={src} alt={alt}/>
                    <div className='compere-item-title'>
                        {title}
                    </div>
                    <div className='compare-item-exp'>
                        {text}
                    </div>
                </div>
            </div>
        </li>
     );
}
 
export default CardItem;