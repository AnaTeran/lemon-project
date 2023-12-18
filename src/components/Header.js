import React, { useState } from 'react';
import bannerImg from '../img/imgBanner.jpg'

const Header = () => {
    return(
        <header className='header'>
            <section>

                <div className='banner'>
                    <h2>Little Lemon <span>Berlin</span></h2>
                    <p>We are family owned Mediterranean restaurante, focused on traditional recipes served with a modern twist.</p>
                    <button aria-lebel='On Click'>Booking a table</button>
                    <button aria-aria-label='./Booking'>Order</button>
                </div>

                <div className='banner-img'>
                    <img src={bannerImg} alt=''></img>
                </div>
            </section>
        </header>
    );
};

export default Header;