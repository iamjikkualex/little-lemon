import { useReducer, useState } from 'react';
import './assets/css/BookingForm.css';
import AppUtils from '../../../utils/AppUtils';

const minDate = new Date().toISOString().split('T')[0];

const updateTimes = (availableTimes, selectedDate) => {
    const response = AppUtils.fetchRandomTimingsAPI(new Date(selectedDate));
    return (response.length !== 0) ? response : availableTimes;
};

const initialAvailableTimes = AppUtils.fetchRandomTimingsAPI(new Date());

const BookingForm = () => {
    const [availableTimes, dispatchOnDateChange] = useReducer(updateTimes, initialAvailableTimes);
    const [bookingDate, setBookingDate] = useState(minDate);
    const [bookingTime, setBookingTime] = useState(availableTimes[0])

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
            <input type="number" placeholder="1" min="1" max="10" id="guests" />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion">
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    );
};

export default BookingForm;