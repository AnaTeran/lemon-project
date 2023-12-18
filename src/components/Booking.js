import React, { useState } from 'react';
import BookingForm from "./BookingForm";
import plate from "../img/plate.jpg";


const Booking = (props) => {
    return (
        <section>
            <div className='banner-booking'>
                <img src={plate} alt=''></img>
            </div>

            <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>

        </section>
    );
};

export default Booking;