// App Utils for Little Lemon Website

const AppUtils = {
    links: new Map(),
};

AppUtils.links.set('home', {name: 'Home', path: '/', isLinkVisibleOnNav: true});
AppUtils.links.set('about', {name: 'About', path: '/about', isLinkVisibleOnNav: true});
AppUtils.links.set('menu', {name: 'Menu', path: '/menu', isLinkVisibleOnNav: true});
AppUtils.links.set('reservations', {name: 'Reservations', path: '/reservations', isLinkVisibleOnNav: true});
AppUtils.links.set('orderOnline', {name: 'Order Online', path: '/order-online', isLinkVisibleOnNav: true});
AppUtils.links.set('login', {name: 'Login', path: '/login', isLinkVisibleOnNav: true});
AppUtils.links.set('confirmReservation', {name: 'Confirm Reservation', path: '/confirm-reservation', isLinkVisibleOnNav: false});

export default AppUtils;
