// App Constants for Little Lemon Website

const constants = {
    links: new Map([
        ['home', {name: 'Home', path: '/', isLinkVisibleOnNav: true}],
        ['about', {name: 'About', path: '/about', isLinkVisibleOnNav: true}],
        ['menu', {name: 'Menu', path: '/menu', isLinkVisibleOnNav: true}],
        ['reservations', {name: 'Reservations', path: '/reservations', isLinkVisibleOnNav: true}],
        ['orderOnline', {name: 'Order Online', path: '/order-online', isLinkVisibleOnNav: true}],
        ['login', {name: 'Login', path: '/login', isLinkVisibleOnNav: true}],
        ['confirmReservation', {name: 'Confirm Reservation', path: '/confirm-reservation', isLinkVisibleOnNav: false}]
    ]),
};

export default constants;
