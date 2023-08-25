// App Constants for Little Lemon Website

const APP_CONSTANTS = {
    EMPTY: '',
    NULL: null,
    ZERO: 0,
    MIN_NO_OF_GUESTS: 1,
    MAX_NO_OF_GUESTS: 10,
    LINKS: new Map([
        ['home', {name: 'Home', path: '/', isLinkVisibleOnNav: true}],
        ['about', {name: 'About', path: '/about', isLinkVisibleOnNav: true}],
        ['menu', {name: 'Menu', path: '/menu', isLinkVisibleOnNav: true}],
        ['reservations', {name: 'Reservations', path: '/reservations', isLinkVisibleOnNav: true}],
        ['orderOnline', {name: 'Order Online', path: '/order-online', isLinkVisibleOnNav: true}],
        ['login', {name: 'Login', path: '/login', isLinkVisibleOnNav: true}],
        ['confirmReservation', {name: 'Confirm Reservation', path: '/confirm-reservation', isLinkVisibleOnNav: false}]
    ]),
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
    BOOKING_PAGE_TEXTS: new Map([
        ['reserveTable', {text: 'Reserve a Table'}],
    ]),
    CONFIRMED_BOOKING_TEXTS: new Map([
        ['reservationConfirmed', {text: 'Reservation has been confirmed'}],
        ['confirmationDesc', {text: 'You will receive reservation details shortly'}],
    ]),
    UNDER_MAINTENANCE_PAGE_TEXTS: new Map([
        ['oops', {text: 'Oops!'}],
        ['underMaintenance', {text: 'Under Maintenance'}],
    ]),
    NOT_FOUND_PAGE_TEXTS: new Map([
        ['oops', {text: 'Oops!'}],
        ['notFound', {text: 'Page Not Found'}],
    ]),
    SIZE: {
        threeX: '3x',
    },
    HTML_TEXTS: {
        className: {
            formField: 'form-field',
            buttonPrimary: 'button-primary',
            bookings: 'bookings',
            confirmedBookingDiv: 'container confirmed-booking',
            underMaintenancePageDiv: 'container under-maintenance',
            notFoundPageDiv: 'container not-found',
        },
        id: {
            resDate: 'res-date',
            resTime: 'res-time',
            guests: 'guests',
            occasion: 'occasion',
        },
        name: {
            resDate: 'res-date',
            resTime: 'res-time',
            guests: 'guests',
            occasion: 'occasion',
        },
        type: {
            date: 'date',
            number: 'number',
            submit: 'submit',
        },
        htmlFor: {
            resDate: 'res-date',
            resTime: 'res-time',
            guests: 'guests',
            occasion: 'occasion',
        },
        dataTestId: {
            bookingTimeOption: 'booking-time-option',
            bookingOccasionOption: 'booking-occasion-option',
            dateErrorMsg: 'date-error-msg',
            timeErrorMsg: 'time-error-msg',
            guestsErrorMsg: 'guests-error-msg',
            occasionErrorMsg: 'occasion-error-msg',
        },
        ariaLabel: {
            onClick: 'On Click',
        }
    }
};

export default APP_CONSTANTS;
