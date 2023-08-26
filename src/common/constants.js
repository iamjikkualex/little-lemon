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
    FOOTER_TEXTS: new Map([
        ['contacts', {location: 'XYZ Street, Chicago, IL', phone: '(321) 456-7890', email: 'contact@littlelemon.com'}],
        ['socials', {facebook: 'facebook', twitter: 'twitter', instagram: 'instagram', youtube: 'youtube'}],
    ]),
    HOME_TEXTS: new Map([
        ['littleLemon', {text: 'Little Lemon'}],
        ['chicago', {text: 'Chicago'}],
        ['heroDesc', {text: 'We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.'}],
        ['reserveTable', {text: 'Reserve a Table'}],
        ['specials', {text: 'Specials'}],
        ['greekSalad', {name: 'Greek Salad', price: '$12.99', desc: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'}],
        ['bruschetta', {name: 'Bruschetta', price: '$7.99', desc: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'}],
        ['lemonDessert', {name: 'Lemon Dessert', price: '$5.99', desc: 'A simple, zingy, creamy no-bake tasty lemon dessert with impressive pud, light enough to have a slice to finish a big meal.'}],
        ['onlineMenu', {text: 'Online Menu'}],
        ['orderDelivery', {text: 'Order a Delivery'}],
        ['customerOne', {name: 'Ann Ben', rating: [1, 1, 1, 1], review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}],
        ['customerTwo', {name: 'Matthew Henry', rating: [1, 1, 1], review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}],
        ['customerThree', {name: 'Jeff Haris', rating: [1, 1, 1, 0.5], review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}],
        ['customerFour', {name: 'Kris Tom', rating: [1, 1, 1, 1, 0.5], review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}],
        ['testimonials', {text: 'Customer Testimonials'}],
        ['aboutDesc', {text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                              non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                              sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`}],
    ]),
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
        xs: 'xs',
    },
    HTML_TEXTS: {
        className: {
            hero: 'hero',
            heroInformation: 'hero-information',
            heroImage: 'hero-image',
            highlightsHeader: 'highlights-header',
            formField: 'form-field',
            buttonPrimary: 'button-primary',
            bookings: 'bookings',
            specialCard: 'special-card',
            specialCardImage: 'special-card-image',
            specialCardHeader: 'special-card-header',
            specialCardBody: 'special-card-body',
            testimonials: 'testimonials',
            testimonialCard: 'testimonial-card',
            aboutDescription: 'about-description',
            aboutChefsImage: 'about-chefs-image',
            chefImageTop: 'chef-image-top',
            chefImageBottom: 'chef-image-bottom',
            containerGrid: 'container grid',
            aboutSection: 'container grid about',
            highlightsSection: 'container grid highlights',
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
        },
        alt: {
            restaurantFood: 'Restaurant Food',
            chefsMarioAndAdrian: 'Chefs Mario and Adrian'
        }
    }
};

export default APP_CONSTANTS;
