import { useReducer } from 'react';
import BookingForm from "./BookingForm";
import AppUtils from "../../../utils/AppUtils";
import './assets/css/BookingForm.css';

const updateTimes = (availableTimes, selectedDate) => {
    const response = AppUtils.fetchRandomTimingsAPI(new Date(selectedDate));
    return (response.length !== 0) ? response : availableTimes;
};

const initializeTimes = initialAvailableTimes => [...initialAvailableTimes, ...AppUtils.fetchRandomTimingsAPI(new Date())];

const BookingPage = () => {
    const [availableTimes, dispatchOnDateChange] = useReducer(updateTimes, [], initializeTimes);

    return (
        <div className="bookings">
            <h2>Reserve a Table</h2>
            <BookingForm availableTimes={availableTimes} dispatchOnDateChange={dispatchOnDateChange} />
        </div>
    );
};

export default BookingPage;