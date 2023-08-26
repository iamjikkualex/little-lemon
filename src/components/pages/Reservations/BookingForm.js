import { useState } from 'react';
import {getMinDate, getMaxDate} from '../../../common/utils';
import AppConstants from '../../../common/constants';

const HTML_TEXTS = AppConstants.HTML_TEXTS;
const BOOKING_FORM_TEXTS = AppConstants.BOOKING_FORM_TEXTS;

const BookingForm = ({availableTimes, dispatchOnDateChange, submitForm}) => {
    const [bookingDate, setBookingDate] = useState(getMinDate());
    const [bookingTime, setBookingTime] = useState(availableTimes[0]);
    const [noOfGuests, setNoOfGuests] = useState(AppConstants.MIN_NO_OF_GUESTS);
    const [occasion, setOccasion] = useState(AppConstants.OCCASIONS[0]);

    let isBookingDateValid = () => bookingDate !== AppConstants.EMPTY && bookingDate >= getMinDate() && bookingDate <= getMaxDate();
    let invalidBookingDateErrorMsg = BOOKING_FORM_TEXTS.get('invalidBookingDateErrorMsg').text;

    let isBookingTimeValid = () => bookingTime !== AppConstants.EMPTY;
    let invalidBookingTimeErrorMsg = BOOKING_FORM_TEXTS.get('invalidBookingTimeErrorMsg').text;

    let isNoOfGuestsValid = () => noOfGuests !== AppConstants.EMPTY && noOfGuests >= 1 && noOfGuests <= 10;
    let invalidNoOfGuestsErrorMsg = BOOKING_FORM_TEXTS.get('invalidNoOfGuestsErrorMsg').text;

    let isOccasionValid = () => occasion !== AppConstants.EMPTY;
    let invalidOccasionErrorMsg = BOOKING_FORM_TEXTS.get('invalidOccasionErrorMsg').text;

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
            <div className={HTML_TEXTS.className.formField}>
                <label htmlFor={HTML_TEXTS.htmlFor.resDate}>{BOOKING_FORM_TEXTS.get('chooseDate').text}</label>
                <input
                    type={HTML_TEXTS.type.date}
                    id={HTML_TEXTS.id.resDate}
                    name={HTML_TEXTS.name.resDate}
                    min={getMinDate()}
                    max={getMaxDate()}
                    value={bookingDate}
                    onChange={handleDateChange}
                    required
                />
                {
                  (!isBookingDateValid()
                  && invalidBookingDateErrorMsg)
                  ? <p data-testid={HTML_TEXTS.dataTestId.dateErrorMsg}>{invalidBookingDateErrorMsg}</p>
                  : AppConstants.NULL
                }
            </div>
            <div className={HTML_TEXTS.className.formField}>
                <label htmlFor={HTML_TEXTS.htmlFor.resTime}>{BOOKING_FORM_TEXTS.get('chooseTime').text}</label>
                <select
                    id={HTML_TEXTS.id.resTime}
                    name={HTML_TEXTS.name.resTime}
                    value={bookingTime}
                    onChange={e => setBookingTime(e.target.value)}
                    required
                >
                    {availableTimes.map(time =>
                        <option data-testid={HTML_TEXTS.dataTestId.bookingTimeOption} key={time}>
                            {time}
                        </option>
                    )}
                </select>
                {
                  (!isBookingTimeValid()
                  && invalidBookingTimeErrorMsg)
                  ? <p data-testid={HTML_TEXTS.dataTestId.timeErrorMsg}>{invalidBookingTimeErrorMsg}</p>
                  : AppConstants.NULL
                }
            </div>
            <div className={HTML_TEXTS.className.formField}>
                <label htmlFor={HTML_TEXTS.htmlFor.guests}>{BOOKING_FORM_TEXTS.get('noOfGuests').text}</label>
                <input
                    type={HTML_TEXTS.type.number}
                    id={HTML_TEXTS.id.guests}
                    name={HTML_TEXTS.name.guests}
                    min={AppConstants.MIN_NO_OF_GUESTS}
                    max={AppConstants.MAX_NO_OF_GUESTS}
                    value={noOfGuests}
                    onChange={e => setNoOfGuests(e.target.value)}
                    required
                />
                {
                  (!isNoOfGuestsValid()
                  && invalidNoOfGuestsErrorMsg)
                  ? <p data-testid={HTML_TEXTS.dataTestId.guestsErrorMsg}>{invalidNoOfGuestsErrorMsg}</p>
                  : AppConstants.NULL}
            </div>
            <div className={HTML_TEXTS.className.formField}>
                <label htmlFor={HTML_TEXTS.htmlFor.occasion}>{BOOKING_FORM_TEXTS.get('occasion').text}</label>
                <select
                    id={HTML_TEXTS.id.occasion}
                    name={HTML_TEXTS.name.occasion}
                    value={occasion}
                    onChange={e => setOccasion(e.target.value)}
                    required
                >
                    {AppConstants.OCCASIONS.map((occasion, index) =>
                        <option data-testid={HTML_TEXTS.dataTestId.bookingOccasionOption} key={index}>
                            {occasion}
                        </option>
                    )}
                </select>
                {
                  (!isOccasionValid()
                  && invalidOccasionErrorMsg)
                  ? <p data-testid={HTML_TEXTS.dataTestId.occasionErrorMsg}>{invalidOccasionErrorMsg}</p>
                  : AppConstants.NULL}
            </div>
            <button
                aria-label={HTML_TEXTS.ariaLabel.onClick}
                className={HTML_TEXTS.className.buttonPrimary}
                type={HTML_TEXTS.type.submit}
                disabled={!areAllFieldsValid()}
            >
                {AppConstants.BOOKING_FORM_TEXTS.get('buttonText').text}
            </button>
        </form>
    );
};

export default BookingForm;