import React from 'react';
import {Link} from 'react-router-dom'
import './Button.css'

const STYELS=['btn--primary','btn--outline', 'btn--special', 'btn--search', 'btn--search--place', 'btn--tour']
const SIZES=['btn--medium', 'btn--large']

const Button = (props) => {
    const {to,children,buttonStyle, buttonSize}=props
    const ButtonStyle= STYELS.includes(buttonStyle) ? buttonStyle:STYELS[0]
    const ButtonSize=SIZES.includes(buttonSize) ? buttonSize:SIZES[0]
    
    return ( 
        <Link to={to} className='btn-mobile'>
            <button  className={`btn ${ButtonStyle} ${ButtonSize}`}>
                {children}
            </button>
        </Link>
     );
}
 
export default Button;