import { Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/Home/HomePage';
import BookingPage from './components/pages/Reservations/BookingPage';
import ConfirmedBooking from './components/pages/Reservations/ConfirmedBooking';
import Layout from "./components/layout/Main/Main";
import AppConstants from './common/constants';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={AppConstants.LINKS.get('home').path} element={<HomePage />} />
        <Route path={AppConstants.LINKS.get('reservations').path} element={<BookingPage />} />
        <Route path={AppConstants.LINKS.get('confirmReservation').path} element={<ConfirmedBooking />} />
      </Routes>
    </Layout>
  );
};

export default App;
