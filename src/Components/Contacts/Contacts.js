import React from 'react';
import map from '../../images/map.png'
import inst from '../../images/inst.png'
import wats from '../../images/wp.png'
import face from '../../images/fsb.png'

import './Contacts.css'
const Contacts = () => {
    return (
        <>
            <h2 className='h2-cont'>Контакты</h2>
            <div className='contacts'>
                <div className='contact-right'>
                    <div className='contact-h3-p'>
                        <h3 >Режим работы</h3>
                        <p>c 10:00 до 20:00</p>
                        <p>Сб, Вс - выходной</p>

                    </div>
                    <div className='contact-h3-p'>
                        <h3>Телефон</h3>
                        <p>+996 (0553) 577-575</p>
                        <p>+996 (0502) 020-110</p>
                    </div>
                    <div className='contact-h3-p'>
                        <h3>Адрес</h3>
                        <p>г. Бишкек, Медерова, 50/2</p>
                        <p>ccc</p>
                    </div>
                
                    <div className='social'>
                        <img src={inst} />                    
                        <img src={wats} />
                        <img src={face} />
                    </div>
                </div>
                <div className='map'><img  src={map}/></div>
            </div>
        </>
    );
};

export default Contacts;