import { useState } from 'react';
import AppUtils from '../../../utils/AppUtils';
import { useNavigate } from 'react-router-dom';

const minDate = new Date().toISOString().split('T')[0];
const [minNoOfGuests, maxNoOfGuests] = [1, 10];
const occasions = ['Birthday', 'Anniversary'];

const BookingForm = ({availableTimes, dispatchOnDateChange, submitData}) => {
    const [bookingDate, setBookingDate] = useState(minDate);
    const [bookingTime, setBookingTime] = useState(availableTimes[0]);
    const [noOfGuests, setNoOfGuests] = useState(minNoOfGuests);
    const [occasion, setOccasion] = useState(occasions[0]);
    const navigate = useNavigate();

    const isBookingDateValid = () => bookingDate !== '';
    const invalidBookingDateErrorMsg = "Please choose a valid date";

    const isBookingTimeValid = () => bookingTime !== '';
    const invalidBookingTimeErrorMsg = "Please choose a valid time";

    const isNoOfGuestsValid = () => noOfGuests !== '';
    const invalidNoOfGuestsErrorMsg = "Please enter a number between 1 and 10";

    const isOccasionValid = () => occasion !== '';
    const invalidOccasionErrorMsg = "Please choose a valid occasion";

    const areAllFieldsValid = () => isBookingDateValid() && isBookingTimeValid() && isNoOfGuestsValid() && isOccasionValid();

    const handleDateChange = e => {
        setBookingDate(e.target.value);
        dispatchOnDateChange(e.target.value);
    };

    const handleFormSubmit = e => {
        e.preventDefault();
        submitData({bookingDate, bookingTime, noOfGuests, occasion});
    };

    return (
        <form style={{display: 'grid', maxWidth: '200px', gap: '20px'}} onSubmit={handleFormSubmit}>
            <div className='form-field'>
                <label htmlFor="res-date">Choose Date</label>
                <input
                    type="date"
                    id="res-date"
                    name="res-date"
                    min={minDate}
                    value={bookingDate}
                    onChange={handleDateChange}
                    required
                />
                {(!isBookingDateValid() && invalidBookingDateErrorMsg) ? <p>{invalidBookingDateErrorMsg}</p> : null}
            </div>
            <div className='form-field'>
                <label htmlFor="res-time">Choose Time</label>
                <select
                    id="res-time"
                    name="res-time"
                    value={bookingTime}
                    onChange={e => setBookingTime(e.target.value)}
                    required
                >
                    {availableTimes.map(time =>
                        <option data-testid="booking-time-option" key={time}>
                            {time}
                        </option>
                    )}
                </select>
                {(!isBookingTimeValid() && invalidBookingTimeErrorMsg) ? <p>{invalidBookingTimeErrorMsg}</p> : null}
            </div>
            <div className='form-field'>
                <label htmlFor="guests">Number of Guests</label>
                <input
                    type="number"
                    id="guests"
                    name="guests"
                    min={minNoOfGuests}
                    max={maxNoOfGuests}
                    value={noOfGuests}
                    onChange={e => setNoOfGuests(e.target.value)}
                    required
                />
                {(!isNoOfGuestsValid() && invalidNoOfGuestsErrorMsg) ? <p>{invalidNoOfGuestsErrorMsg}</p> : null}
            </div>
            <div className='form-field'>
                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    name="occasion"
                    value={occasion}
                    onChange={e => setOccasion(e.target.value)}
                    required
                >
                    {occasions.map((occasion, index) =>
                        <option key={index}>
                            {occasion}
                        </option>
                    )}
                </select>
                {(!isOccasionValid() && invalidOccasionErrorMsg) ? <p>{invalidOccasionErrorMsg}</p> : null}
            </div>
            <button
                className='button-primary'
                type='submit'
                disabled={!areAllFieldsValid()}
            >
                Make Your Reservation
            </button>
        </form>
    );
};

export default BookingForm;