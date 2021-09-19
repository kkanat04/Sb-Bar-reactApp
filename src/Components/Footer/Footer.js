import React from 'react';
import "./Footer.css"
import bar from '../../images/flogo.png'
import inst from '../../images/inst.png'
import wats from '../../images/wp.png'
import face from '../../images/fsb.png'

const Footer = () => {
    return (
        <div className='footer'>
            <img className='bar' src={bar}></img>

            <div>
                <h3 className='works'>Режим работы</h3>
                <p className='p'>c 10:00 до 20:00</p>
                <p className='p'>Сб, Вс - выходной</p>

            </div>
            <div>
                <h3 className='work'>Телефон</h3>
                <p className='p'>+996 (0553) 577-575</p>
                <p className='p'>+996 (0502) 020-110</p>


            </div>
            <div>
                <h3 className='work'>Адрес</h3>
                <p className='p'>г. Бишкек, Медерова, 50/2</p>
                <p className='c'>ccc</p>


            </div>
            <div className='program'>
            <img src={inst}></img>
            <img src={wats}></img>
            <img src={face}></img>
            

            </div>


        </div>
    );
};

export default Footer;