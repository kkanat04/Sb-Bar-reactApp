import React from 'react';
import block from '../../images/block.png'
import './Menu.css'


const Menu = () => {
    return (
        <div>
             <div>
                <ul className='Menu'>
                    <li className='menuBig'>Меню</li>
                    <li className='InMenu'>Новинки</li>
                    <li className='InMenu'>Популярное</li>
                    <li className='InMenu'>Популярное</li>
                    <li className='InMenu'>Акции </li>
                    <li className='InMenu'>Стейки</li>
                    <li className='InMenu'>Гарниры</li>
                    <li className='InMenu'>Салаты</li>
                    <li className='InMenu'>Напитки</li>
                </ul>
        </div>

            <div className='blocks'>

                <div className='sub-block'>
                    <img src={block}></img>
                <div className='text'>
                        <p>Форель с булгуром</p>
                        <p className='descr'>Описание продукта, особенности, плюсы и минусы. </p>
                    <div className='sub-text'>
                        <p><b>1000</b></p>
                        <p>- 1 +</p>
                        <button className='inBag' >В КОРЗИНУ</button>
                    </div>
                </div>
                </div>

                <div className='sub-block'>
                    <img src={block}></img>
                <div className='text'>
                        <p>Форель с булгуром</p>
                        <p className='descr'>Описание продукта, особенности, плюсы и минусы. </p>
                    <div className='sub-text'>
                        <p><b>1000</b></p>
                        <p>- 1 +</p>
                        <button className='inBag' >В КОРЗИНУ</button>
                    </div>
                </div>
                </div>
                <div className='sub-block'>
                    <img src={block}></img>
                <div className='text'>
                        <p>Форель с булгуром</p>
                        <p className='descr'>Описание продукта, особенности, плюсы и минусы. </p>
                    <div className='sub-text'>
                        <p><b>1000</b></p>
                        <p>- 1 +</p>
                        <button className='inBag' >В КОРЗИНУ</button>
                    </div>
                </div>
                </div>
                <div className='sub-block'>
                    <img src={block}></img>
                <div className='text'>
                        <p>Форель с булгуром</p>
                        <p>Описание продукта, особенности, плюсы и минусы. </p>
                    <div className='sub-text'>
                        <p><b>1000</b></p>
                        <p>- 1 +</p>
                        <button className='inBag' >В КОРЗИНУ</button>
                    </div>
                </div>
                </div>
                <div className='sub-block'>
                    <img src={block}></img>
                <div className='text'>
                        <p>Форель с булгуром</p>
                        <p className='descr'>Описание продукта, особенности, плюсы и минусы. </p>
                    <div className='sub-text'>
                        <p><b>1000</b></p>
                        <p>- 1 +</p>
                        <button className='inBag' >В КОРЗИНУ</button>
                    </div>
                </div>
                </div>
                <div className='sub-block'>
                    <img src={block}></img>
                <div className='text'>
                        <p>Форель с булгуром</p>
                        <p className='descr'>Описание продукта, особенности, плюсы и минусы. </p>
                    <div className='sub-text'>
                        <p><b>1000</b></p>
                        <p>- 1 +</p>
                        <button className='inBag'>В КОРЗИНУ</button>
                    </div>
                </div>
                </div>

                <div className='sub-block'>
                    <img src={block}></img>
                <div className='text'>
                        <p>Форель с булгуром</p>
                        <p className='descr'>Описание продукта, особенности, плюсы и минусы. </p>
                    <div className='sub-text'>
                        <p><b>1000</b></p>
                        <p>- 1 +</p>
                        <button className='inBag'>В КОРЗИНУ</button>
                    </div>
                </div>
                </div>

                <div className='sub-block'>
                    <img src={block}></img>
                <div className='text'>
                        <p>Форель с булгуром</p>
                        <p className='descr'>Описание продукта, особенности, плюсы и минусы. </p>
                    <div className='sub-text'>
                        <p><b>1000</b></p>
                        <p>- 1 +</p>
                        <button className='inBag'>В КОРЗИНУ</button>
                    </div>
                </div>
                </div>

                <div className='sub-block'>
                    <img src={block}></img>
                <div className='text'>
                        <p>Форель с булгуром</p>
                        <p className='descr'>Описание продукта, особенности, плюсы и минусы. </p>
                    <div className='sub-text'>
                        <p><b>1000</b></p>
                        <p>- 1 +</p>
                        <button className='inBag'>В КОРЗИНУ</button>
                    </div>
                </div>
                </div>
               

            </div>
            <button className='btn'>ЗАГРУЗИТЬ ЕЩЕ</button>
            
        </div>
    );
};

export default Menu;