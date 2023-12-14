import React, { useState } from 'react';
import bannerImg from '../img/imgBanner.jpg'

const Header = () => {
    return(
        <header className='header'>
            <section>
                {/*texto del banner*/}
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    {/*<h3>Berlin</h3>*/}
                    <p>We are family owned Mediterranean restaurante, focused on traditional recipes served with a modern twist.</p>
                    <button aria-lebel='On Click'>Booking a table</button>
                    <button aria-lebel='On Click'>Order</button>
                    {/*<Button onClick={() => navigate("/bookings")} aria-label="Go to reservation table page.">Reserve a Table</Button>*/}
                </div>

                <div className='banner-img'>
                    <img src={bannerImg} alt=''></img>
                </div>
            </section>
        </header>
    );
};

export default Header;