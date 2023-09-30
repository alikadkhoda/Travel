import React from 'react';
import Button from '../Button/Button';
import './SignUpForm.css'
const SignUpForm = () => {
    return (
        <div className='signup-container'>
            <div className='signup-form'>
                <input type="text" name="name" className='text-input' placeholder='نام و نام خانوادگی' autoComplete='off' />
                <input type="text" name="number" className='text-input' placeholder='شماره همراه' autoComplete='off' />
                <input type="email" name="email" className='text-input' placeholder='ایمیل' autoComplete='off' />
                <input type="text" name="password" className='text-input' placeholder='رمز عبور' autoComplete='off' />
                <Button buttonStyle='btn--tour'>
                    ثبت نام
                </Button>
            </div>
        </div>
    );
}

export default SignUpForm;