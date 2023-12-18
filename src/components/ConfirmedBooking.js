import React from "react";
import plate from "../img/plate.jpg";

const ConfirmedBooking = () => {
    return(
        <section>
            <div className='banner-booking'>
                <img src={plate} alt=''></img>
            </div>

        <div className="comfirm">
            <div>
            <h1>Booking has been confirmed!</h1>
            </div>
        </div>
        </section>

    );
};

export default ConfirmedBooking;