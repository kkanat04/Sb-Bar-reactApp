import React from 'react';
import stake from '../../images/stake.png'
import './Home.css'
import Menu from '../Menu/Menu';
import AboutUs from '../AboutUs/AboutUs';
import news from '../../images/news.png';


const Home = () => {
    return (
        <div className='bkg'>
        <div className='home'>
            <div >
                <img src={stake}></img>
            </div>
            <Menu/>
            <AboutUs/>
            {/* <div className='news'>
                <img src={news}/>
            </div> */}
        </div>
        </div>
    );
};

export default Home;