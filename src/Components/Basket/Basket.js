import React from 'react';
import './Basket.css'
import imgbasket from '../../images/img-basket.png'

const Basket = () => {
  return (
    <div>
      <h2 className="basket-h2">Корзина</h2>

      <div className="basket-block">
        <div className="basket-img">
          <img src={imgbasket} />
        </div>
        <div className="text-side">
          <div className="text-basket">
            <h3>Форель с булгуром</h3>
            <p>X</p>
          </div>
          <div className="descr-basket">
            <p>
              Количество <br />
              <br />
              <b> - 2 +</b>{" "}
            </p>
            <p>
              Цена <br />
              <br />
              <b>1000 сом </b>{" "}
            </p>
            <p>
              Конечная цена <br />
              <br />
              <b>2000 сом </b>{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="basket-block">
        <div className="basket-img">
          <img src={imgbasket} />
        </div>
        <div className="text-side">
          <div className="text-basket">
            <h3>Форель с булгуром</h3>
            <p>X</p>
          </div>
          <div className="descr-basket">
            <p>
              Количество <br />
              <br />
              <b> - 2 +</b>{" "}
            </p>
            <p>
              Цена <br />
              <br />
              <b>1000 сом </b>{" "}
            </p>
            <p>
              Конечная цена <br />
              <br />
              <b>2000 сом </b>{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="basket-block">
        <div className="basket-img">
          <img src={imgbasket} />
        </div>
        <div className="text-side">
          <div className="text-basket">
            <h3>Форель с булгуром</h3>
            <p>X</p>
          </div>
          <div className="descr-basket">
            <p>
              Количество <br />
              <br />
              <b> - 2 +</b>{" "}
            </p>
            <p>
              Цена <br />
              <br />
              <b>1000 сом </b>{" "}
            </p>
            <p>
              Конечная цена <br />
              <br />
              <b>2000 сом </b>{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="inf-basket">
        <p>
          Общая стоимость: <b>6000 сом</b>
        </p>

        <p>
          Количество элементов: <b>6</b>
        </p>
        <br />
        <button className="btn-order">ОФОРМИТЬ ЗАКАЗ</button>
      </div>

      <h2 className="additional">С этим также подойдет</h2>
      {/* ===================================================== */}
    <div className='add-inf'>
      <div className="basket_sub-block">
        <img src={imgbasket}></img>
        <div className="text">
          <p>Форель с булгуром</p>
          <p className="descr">
            Описание продукта, особенности, плюсы и минусы.{" "}
          </p>
          <div className="sub-text">
            <p>
              <b>1000</b>
            </p>
            <p>- 1 +</p>
            <button className="inBag">В КОРЗИНУ</button>
          </div>
        </div>
      </div>

      <div className="basket_sub-block">
        <img src={imgbasket}></img>
        <div className="text">
          <p>Форель с булгуром</p>
          <p className="descr">
            Описание продукта, особенности, плюсы и минусы.{" "}
          </p>
          <div className="sub-text">
            <p>
              <b>1000</b>
            </p>
            <p>- 1 +</p>
            <button className="inBag">В КОРЗИНУ</button>
          </div>
        </div>
      </div>

      <div className="basket_sub-block">
        <img src={imgbasket}></img>
        <div className="text">
          <p>Форель с булгуром</p>
          <p className="descr">
            Описание продукта, особенности, плюсы и минусы.{" "}
          </p>
          <div className="sub-text">
            <p>
              <b>1000</b>
            </p>
            <p>- 1 +</p>
            <button className="inBag">В КОРЗИНУ</button>
          </div>
        </div>
      </div>

      <div className="basket_sub-block">
        <img src={imgbasket}></img>
        <div className="text">
          <p>Форель с булгуром</p>
          <p className="descr">
            Описание продукта, особенности, плюсы и минусы.{" "}
          </p>
          <div className="sub-text">
            <p>
              <b>1000</b>
            </p>
            <p>- 1 +</p>
            <button className="inBag">В КОРЗИНУ</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Basket;