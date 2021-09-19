import React from 'react';
import stock from '../../images/stock.png'
import fasol from '../../images/fasol.png'
import salmon from '../../images/salmon.png'
import bulgur from '../../images/bulgur.png'
import buff from '../../images/buff.png'
import desert from '../../images/desert.png'

import './Stocks.css'

const Stocks = () => {
    return (
        <div className='stocks'>
            <h2 className='stock-h2'>Акции</h2>
            
            <div className='stock-block'>
            <div className="stock-block-img">
            
                    <img src={stock}/>
                    </div>
                <div className='stock-text'>
                        <p className='title'>Фирменный стейк</p>
                        <p className='stock-descr'>Описание продукта, особенности, плюсы и <br/> минусы. Описание продукта, особенности, <br/> плюсы и минусы. </p>
                    <div className='sub-stock-text'>
                        <p className='green-line'><b >1000 сом</b></p>
                        <p className='red-s'><b>500 сом</b></p>
                    </div>
                    <button className='stock-inBag'>В КОРЗИНУ</button>
                </div>
            </div>

            <div className='stock-block'>
                <div className='stock-text right-side'>
                        <p className='title'>Филе с Булгуром</p>
                        <p className='stock-descr'>Описание продукта, особенности, плюсы и <br/> минусы. Описание продукта, особенности, <br/> плюсы и минусы. </p>
                    <div className='right-s'>
                        <p className='green-line'><b >1000 сом</b></p>
                        <p className='red-s'><b>500 сом</b></p>
                    </div>
                    <button className='stock-inBag'>В КОРЗИНУ</button>
                </div>
                <div className="stock-block-img">
                <img src={bulgur}/>
                </div>
            </div>

            <div className='stock-block'>
                <div className="stock-block-img">
                    
                    <img src={fasol}/>
                    </div>
                <div className='stock-text'>
                        <p className='title'>Цыпленок с бобами</p>
                        <p className='stock-descr'>Описание продукта, особенности, плюсы и <br/> минусы. Описание продукта, особенности, <br/> плюсы и минусы. </p>
                    <div className='sub-stock-text'>
                        <p className='green-line'><b >1000 сом</b></p>
                        <p className='red-s'><b>500 сом</b></p>
                    </div>
                    <button className='stock-inBag'>В КОРЗИНУ</button>
                </div>
            </div>
               
            <div className='stock-block'>
                <div className='stock-text right-side'>
                        <p className='title'>Mega Burger</p>
                        <p className='stock-descr'>Описание продукта, особенности, плюсы и <br/> минусы. Описание продукта, особенности, <br/> плюсы и минусы. </p>
                    <div className='right-s'>
                        <p className='green-line'><b >1000 сом</b></p>
                        <p className='red-s'><b>500 сом</b></p>
                    </div>
                    <button className='stock-inBag'>В КОРЗИНУ</button>
                </div>
                <div className="stock-block-img">
                <img src={desert}/>
                </div>
            </div>

            <div className='stock-block'>
            <div className="stock-block-img">
            
                    <img src={salmon}/>
                    </div>
                <div className='stock-text'>
                        <p className='title'>Филе Salmon</p>
                        <p className='stock-descr'>Описание продукта, особенности, плюсы и <br/> минусы. Описание продукта, особенности, <br/> плюсы и минусы. </p>
                    <div className='sub-stock-text'>
                        <p className='green-line'><b>1000 сом</b></p>
                        <p className='red-s'><b>500 сом</b></p>
                    </div>
                    <button className='stock-inBag'>В КОРЗИНУ</button>
                </div>
            </div>

            <div className='stock-block'>
                <div className='stock-text right-side'>
                        <p className='title'>Куринные крылья Buffalo</p>
                        <p className='stock-descr'>Описание продукта, особенности, плюсы и <br/> минусы. Описание продукта, особенности, <br/> плюсы и минусы. </p>
                    <div className='right-s'>
                        <p className='green-line'><b >1000 сом</b></p>
                        <p className='red-s'><b>500 сом</b></p>
                    </div>
                    <button className='stock-inBag'>В КОРЗИНУ</button>
                </div>
                <div className="stock-block-img">
                <img src={buff}/>
                </div>
            </div>

        </div>
    );
};

export default Stocks;