import { useState } from 'react';
import {getMinDate, getMaxDate} from '../../../common/utils';
import AppConstants from '../../../common/constants';

const BookingForm = ({availableTimes, dispatchOnDateChange, submitForm}) => {
    const [bookingDate, setBookingDate] = useState(getMinDate());
    const [bookingTime, setBookingTime] = useState(availableTimes[0]);
    const [noOfGuests, setNoOfGuests] = useState(AppConstants.MIN_NO_OF_GUESTS);
    const [occasion, setOccasion] = useState(AppConstants.OCCASIONS[0]);

    let isBookingDateValid = () => bookingDate !== AppConstants.EMPTY && bookingDate >= getMinDate() && bookingDate <= getMaxDate();
    let invalidBookingDateErrorMsg = AppConstants.BOOKING_FORM_TEXTS.get('invalidBookingDateErrorMsg').text;

    let isBookingTimeValid = () => bookingTime !== AppConstants.EMPTY;
    let invalidBookingTimeErrorMsg = AppConstants.BOOKING_FORM_TEXTS.get('invalidBookingTimeErrorMsg').text;

    let isNoOfGuestsValid = () => noOfGuests !== AppConstants.EMPTY && noOfGuests >= 1 && noOfGuests <= 10;
    let invalidNoOfGuestsErrorMsg = AppConstants.BOOKING_FORM_TEXTS.get('invalidNoOfGuestsErrorMsg').text;

    let isOccasionValid = () => occasion !== AppConstants.EMPTY;
    let invalidOccasionErrorMsg = AppConstants.BOOKING_FORM_TEXTS.get('invalidOccasionErrorMsg').text;

    const areAllFieldsValid = () => isBookingDateValid() && isBookingTimeValid() && isNoOfGuestsValid() && isOccasionValid();

    const handleDateChange = e => {
        setBookingDate(e.target.value);
        dispatchOnDateChange(e.target.value);
    };

    const handleFormSubmit = e => {
        e.preventDefault();
        submitForm({bookingDate, bookingTime, noOfGuests, occasion});
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div className={AppConstants.HTML_TEXTS.className.formField}>
                <label htmlFor={AppConstants.HTML_TEXTS.htmlFor.resDate}>{AppConstants.BOOKING_FORM_TEXTS.get('chooseDate').text}</label>
                <input
                    type={AppConstants.HTML_TEXTS.type.date}
                    id={AppConstants.HTML_TEXTS.id.resDate}
                    name={AppConstants.HTML_TEXTS.name.resDate}
                    min={getMinDate()}
                    max={getMaxDate()}
                    value={bookingDate}
                    onChange={handleDateChange}
                    required
                />
                {(!isBookingDateValid() && invalidBookingDateErrorMsg) ? <p data-testid='error-msg'>{invalidBookingDateErrorMsg}</p> : null}
            </div>
            <div className={AppConstants.HTML_TEXTS.className.formField}>
                <label htmlFor="res-time">{AppConstants.BOOKING_FORM_TEXTS.get('chooseTime').text}</label>
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
            <div className={AppConstants.HTML_TEXTS.className.formField}>
                <label htmlFor="guests">{AppConstants.BOOKING_FORM_TEXTS.get('noOfGuests').text}</label>
                <input
                    type={AppConstants.HTML_TEXTS.type.number}
                    id="guests"
                    name="guests"
                    min={AppConstants.MIN_NO_OF_GUESTS}
                    max={AppConstants.MAX_NO_OF_GUESTS}
                    value={noOfGuests}
                    onChange={e => setNoOfGuests(e.target.value)}
                    required
                />
                {(!isNoOfGuestsValid() && invalidNoOfGuestsErrorMsg) ? <p data-testid='error-msg'>{invalidNoOfGuestsErrorMsg}</p> : null}
            </div>
            <div className={AppConstants.HTML_TEXTS.className.formField}>
                <label htmlFor="occasion">{AppConstants.BOOKING_FORM_TEXTS.get('occasion').text}</label>
                <select
                    id="occasion"
                    name="occasion"
                    value={occasion}
                    onChange={e => setOccasion(e.target.value)}
                    required
                >
                    {AppConstants.OCCASIONS.map((occasion, index) =>
                        <option data-testid='booking-occasion-option' key={index}>
                            {occasion}
                        </option>
                    )}
                </select>
                {(!isOccasionValid() && invalidOccasionErrorMsg) ? <p>{invalidOccasionErrorMsg}</p> : null}
            </div>
            <button
                aria-label='On Click'
                className={AppConstants.HTML_TEXTS.className.buttonPrimary}
                type={AppConstants.HTML_TEXTS.type.submit}
                disabled={!areAllFieldsValid()}
            >
                {AppConstants.BOOKING_FORM_TEXTS.get('buttonText').text}
            </button>
        </form>
    );
};

export default BookingForm;