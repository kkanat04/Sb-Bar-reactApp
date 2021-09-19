import React from 'react';
import './ModalSign.css'

const ModalSign = () => {
    return (
        <div>
            <div className='input'>
                <p>Ваша электонная почта</p>
                <input type='text' placeholder='Введите ваш эл.почты'/>
                <br/>
                <p>Ваш пароль</p>
                <input type='password' placeholder='Введите ваш пароль'/>
            </div>
            
            <div> 
                <input type='checkbox'/>
                <p>Запомнить меня</p>
            </div>
           
            <p>Забыли пароль?</p>
            <button>Войти</button>
        </div>
    );
};

export default ModalSign;