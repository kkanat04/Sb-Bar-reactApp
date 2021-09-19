import React from 'react';
import {NavLink} from 'react-router-dom'
import './Header.css'
import logo from '../../images/logo.png'
import sign from '../../images/sign.png'
import bag from '../../images/bag.png'

const Header = () => {
    return (
        <div className='mainHeader'> 
            <div className='header'>
                <NavLink activeClassName='menu-a' className='menu' exact to='/'>Меню</NavLink>
                <NavLink activeClassName='menu-a' className='menu' exact to='/stocks'>Акции</NavLink>
                <NavLink activeClassName='menu-a' className='menu' exact to='/aboutUs'>О нас</NavLink>
                <NavLink exact to='/home'><img src={logo}></img></NavLink> 
                <NavLink activeClassName='menu-a' className='menu' exact to='/contacts'>Контакты</NavLink>
                <img className='sign' src={sign}></img>
                <NavLink activeClassName='menu-a' className='menu' exact to='/signIn'>Войти</NavLink>
                <NavLink activeClassName='menu-a' className='menu' exact to='/basket'><img src={bag}></img></NavLink>
            </div>
            </div>
    );
};

export default Header;