import { useReducer, useState } from 'react';
import './assets/css/BookingForm.css';
import AppUtils from '../../../utils/AppUtils';

const minDate = new Date().toISOString().split('T')[0];
const [minNoOfGuests, maxNoOfGuests] = [1, 10];
const occasions = ['Birthday', 'Anniversary'];

const updateTimes = (availableTimes, selectedDate) => {
    const response = AppUtils.fetchRandomTimingsAPI(new Date(selectedDate));
    return (response.length !== 0) ? response : availableTimes;
};

const initializeTimes = initialAvailableTimes => [...initialAvailableTimes, ...AppUtils.fetchRandomTimingsAPI(new Date())];

const BookingForm = () => {
    const [availableTimes, dispatchOnDateChange] = useReducer(updateTimes, [], initializeTimes);
    const [bookingDate, setBookingDate] = useState(minDate);
    const [bookingTime, setBookingTime] = useState(availableTimes[0]);
    const [noOfGuests, setNoOfGuests] = useState(minNoOfGuests);
    const [occasion, setOccasion] = useState(occasions[0]);

    const handleDateChange = e => {
        setBookingDate(e.target.value);
        dispatchOnDateChange(e.target.value);
    };

    return (
        <form style={{display: 'grid', maxWidth: '200px', gap: '20px'}}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                min={minDate}
                value={bookingDate}
                onChange={handleDateChange}
            />
            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={bookingTime}
                onChange={e => setBookingTime(e.target.value)}
            >
                {availableTimes.map(time =>
                    <option key={time}>
                        {time}
                    </option>
                )}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                id="guests"
                min={minNoOfGuests}
                max={maxNoOfGuests}
                value={noOfGuests}
                onChange={e => setNoOfGuests(e.target.value)}
            />
            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={e => setOccasion(e.target.value)}
            >
                {occasions.map((occasion, index) =>
                    <option key={index}>
                        {occasion}
                    </option>
                )}
            </select>
            <button
                className='button-primary'
                type='submit'
            >
                Make Your Reservation
            </button>
        </form>
    );
};

export default BookingForm;