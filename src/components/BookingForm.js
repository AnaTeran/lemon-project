import React, { useState } from 'react';

const BookingForm = () => {

    const [occasion, setOccasion] = useState("");
    const [guests, setGuests] = useState("");
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");

return(

    <header>
      <section>
        <form >
          <fieldset>
            <div>
              <label htmlFor="book-date">Choose Date:</label>
              <input id="book-date" value={date} type="date" required/>
            </div>
          </fieldset>
        </form>
      </section>
    </header>
);

};

export default BookingForm;