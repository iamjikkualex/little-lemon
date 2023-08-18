// App Utils for Little Lemon Website

const AppUtils = {
    links: new Map([
        ['home', {name: 'Home', path: '/', isLinkVisibleOnNav: true}],
        ['about', {name: 'About', path: '/about', isLinkVisibleOnNav: true}],
        ['menu', {name: 'Menu', path: '/menu', isLinkVisibleOnNav: true}],
        ['reservations', {name: 'Reservations', path: '/reservations', isLinkVisibleOnNav: true}],
        ['orderOnline', {name: 'Order Online', path: '/order-online', isLinkVisibleOnNav: true}],
        ['login', {name: 'Login', path: '/login', isLinkVisibleOnNav: true}],
        ['confirmReservation', {name: 'Confirm Reservation', path: '/confirm-reservation', isLinkVisibleOnNav: false}]
    ]),
    fetchRandomTimingsAPI: (selectedDate) => {
        const m = 2 ** 35 - 31;
        const a = 185852;
        let seed = selectedDate.getDate();
        let s = seed % m;
        let random = () => (s = s * a % m) / m;
        let result = [];

        for (let i = 17; i <= 23; i++) {
            if (random() < 0.5) result.push(i + ':00');
            if (random() < 0.5) result.push(i + ':30');
        }

        return result;
    },
    submitAPI: (formData) => true,
};

export default AppUtils;
