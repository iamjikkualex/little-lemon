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
                {
                  (!isBookingDateValid()
                  && invalidBookingDateErrorMsg)
                  ? <p data-testid={AppConstants.HTML_TEXTS.dataTestId.dateErrorMsg}>{invalidBookingDateErrorMsg}</p>
                  : AppConstants.NULL
                }
            </div>
            <div className={AppConstants.HTML_TEXTS.className.formField}>
                <label htmlFor={AppConstants.HTML_TEXTS.htmlFor.resTime}>{AppConstants.BOOKING_FORM_TEXTS.get('chooseTime').text}</label>
                <select
                    id={AppConstants.HTML_TEXTS.id.resTime}
                    name={AppConstants.HTML_TEXTS.name.resTime}
                    value={bookingTime}
                    onChange={e => setBookingTime(e.target.value)}
                    required
                >
                    {availableTimes.map(time =>
                        <option data-testid={AppConstants.HTML_TEXTS.dataTestId.bookingTimeOption} key={time}>
                            {time}
                        </option>
                    )}
                </select>
                {
                  (!isBookingTimeValid()
                  && invalidBookingTimeErrorMsg)
                  ? <p data-testid={AppConstants.HTML_TEXTS.dataTestId.timeErrorMsg}>{invalidBookingTimeErrorMsg}</p>
                  : AppConstants.NULL
                }
            </div>
            <div className={AppConstants.HTML_TEXTS.className.formField}>
                <label htmlFor={AppConstants.HTML_TEXTS.htmlFor.guests}>{AppConstants.BOOKING_FORM_TEXTS.get('noOfGuests').text}</label>
                <input
                    type={AppConstants.HTML_TEXTS.type.number}
                    id={AppConstants.HTML_TEXTS.id.guests}
                    name={AppConstants.HTML_TEXTS.name.guests}
                    min={AppConstants.MIN_NO_OF_GUESTS}
                    max={AppConstants.MAX_NO_OF_GUESTS}
                    value={noOfGuests}
                    onChange={e => setNoOfGuests(e.target.value)}
                    required
                />
                {
                  (!isNoOfGuestsValid()
                  && invalidNoOfGuestsErrorMsg)
                  ? <p data-testid={AppConstants.HTML_TEXTS.dataTestId.guestsErrorMsg}>{invalidNoOfGuestsErrorMsg}</p>
                  : AppConstants.NULL}
            </div>
            <div className={AppConstants.HTML_TEXTS.className.formField}>
                <label htmlFor={AppConstants.HTML_TEXTS.htmlFor.occasion}>{AppConstants.BOOKING_FORM_TEXTS.get('occasion').text}</label>
                <select
                    id={AppConstants.HTML_TEXTS.id.occasion}
                    name={AppConstants.HTML_TEXTS.name.occasion}
                    value={occasion}
                    onChange={e => setOccasion(e.target.value)}
                    required
                >
                    {AppConstants.OCCASIONS.map((occasion, index) =>
                        <option data-testid={AppConstants.HTML_TEXTS.dataTestId.bookingOccasionOption} key={index}>
                            {occasion}
                        </option>
                    )}
                </select>
                {
                  (!isOccasionValid()
                  && invalidOccasionErrorMsg)
                  ? <p data-testid={AppConstants.HTML_TEXTS.dataTestId.occasionErrorMsg}>{invalidOccasionErrorMsg}</p>
                  : AppConstants.NULL}
            </div>
            <button
                aria-label={AppConstants.HTML_TEXTS.ariaLabel.onClick}
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