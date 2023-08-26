import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from "./BookingForm";
import AppConstants from "../../../common/constants";
import { fetchAPI, submitAPI } from "../../../common/api";
import './assets/styles/BookingForm.css';

const HTML_TEXTS = AppConstants.HTML_TEXTS;
const BOOKING_PAGE_TEXTS = AppConstants.BOOKING_PAGE_TEXTS;
const LINKS = AppConstants.LINKS;

const updateTimes = (availableTimes, selectedDate) => {
    const response = fetchAPI(new Date(selectedDate));
    return (response.length !== AppConstants.ZERO) ? response : availableTimes;
};

const initializeTimes = initialAvailableTimes => [...initialAvailableTimes, ...fetchAPI(new Date())];

const BookingPage = () => {
    const [availableTimes, dispatchOnDateChange] = useReducer(updateTimes, [], initializeTimes);
    const navigate = useNavigate();

    const submitForm = formData => {
        const response = submitAPI(formData);
        if (response) navigate(LINKS.get('confirmReservation').path);
    };

    return (
        <div className={HTML_TEXTS.className.bookings}>
            <h2>{BOOKING_PAGE_TEXTS.get('reserveTable').text}</h2>
            <BookingForm availableTimes={availableTimes} dispatchOnDateChange={dispatchOnDateChange} submitForm={submitForm} />
        </div>
    );
};

export default BookingPage;