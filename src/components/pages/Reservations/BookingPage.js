import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from "./BookingForm";
import AppConstants from "../../../common/constants";
import { fetchAPI, submitAPI } from "../../../common/api";
import './assets/css/BookingForm.css';

const updateTimes = (availableTimes, selectedDate) => {
    const response = fetchAPI(new Date(selectedDate));
    return (response.length !== 0) ? response : availableTimes;
};

const initializeTimes = initialAvailableTimes => [...initialAvailableTimes, ...fetchAPI(new Date())];

const BookingPage = () => {
    const [availableTimes, dispatchOnDateChange] = useReducer(updateTimes, [], initializeTimes);
    const navigate = useNavigate();

    const submitForm = formData => {
        const response = submitAPI(formData);
        if (response) navigate(AppConstants.links.get('confirmReservation').path);
    };

    return (
        <div className="bookings">
            <h2>Reserve a Table</h2>
            <BookingForm availableTimes={availableTimes} dispatchOnDateChange={dispatchOnDateChange} submitForm={submitForm} />
        </div>
    );
};

export default BookingPage;