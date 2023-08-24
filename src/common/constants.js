// App Constants for Little Lemon Website

const APP_CONSTANTS = {
    EMPTY: '',
    LINKS: new Map([
        ['home', {name: 'Home', path: '/', isLinkVisibleOnNav: true}],
        ['about', {name: 'About', path: '/about', isLinkVisibleOnNav: true}],
        ['menu', {name: 'Menu', path: '/menu', isLinkVisibleOnNav: true}],
        ['reservations', {name: 'Reservations', path: '/reservations', isLinkVisibleOnNav: true}],
        ['orderOnline', {name: 'Order Online', path: '/order-online', isLinkVisibleOnNav: true}],
        ['login', {name: 'Login', path: '/login', isLinkVisibleOnNav: true}],
        ['confirmReservation', {name: 'Confirm Reservation', path: '/confirm-reservation', isLinkVisibleOnNav: false}]
    ]),
    MIN_NO_OF_GUESTS: 1,
    MAX_NO_OF_GUESTS: 10,
    OCCASIONS: ['Birthday', 'Anniversary'],
    BOOKING_FORM_TEXTS: new Map([
        ['chooseDate', {text: 'Choose Date'}],
        ['chooseTime', {text: 'Choose Time'}],
        ['noOfGuests', {text: 'Number of Guests'}],
        ['occasion', {text: 'Occasion'}],
        ['buttonText', {text: 'Make Your Reservation'}],
        ['invalidBookingDateErrorMsg', {text: 'Please choose a valid date within six months'}],
        ['invalidBookingTimeErrorMsg', {text: 'Please choose a valid time'}],
        ['invalidNoOfGuestsErrorMsg', {text: 'Please enter a number between 1 and 10'}],
        ['invalidOccasionErrorMsg', {text: 'Please choose a valid occasion'}],
    ]),
    HTML_TEXTS: {
        className: {
            formField: 'form-field',
            buttonPrimary: 'button-primary',
        },
        id: {
            resDate: 'res-date',
        },
        name: {
            resDate: 'res-date',
        },
        type: {
            date: 'date',
            number: 'number',
            submit: 'submit',
        },
        htmlFor: {
            resDate: 'res-date',
        }
    }
};

export default APP_CONSTANTS;
