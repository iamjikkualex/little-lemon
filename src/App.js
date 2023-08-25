import { Routes, Route } from 'react-router-dom';
import Layout from "./components/layout/Main/Main";
import HomePage from './components/pages/Home/HomePage';
import BookingPage from './components/pages/Reservations/BookingPage';
import ConfirmedBooking from './components/pages/Reservations/ConfirmedBooking';
import NotFoundPage from './components/pages/Not Found/NotFoundPage';
import UnderMaintenancePage from './components/pages/Under Maintenance/UnderMaintenancePage';
import AppConstants from './common/constants';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={AppConstants.LINKS.get('home').path} element={<HomePage />} />
        <Route path={AppConstants.LINKS.get('reservations').path} element={<BookingPage />} />
        <Route path={AppConstants.LINKS.get('confirmReservation').path} element={<ConfirmedBooking />} />
        <Route path={AppConstants.LINKS.get('about').path} element={<UnderMaintenancePage />} />
        <Route path={AppConstants.LINKS.get('menu').path} element={<UnderMaintenancePage />} />
        <Route path={AppConstants.LINKS.get('orderOnline').path} element={<UnderMaintenancePage />} />
        <Route path={AppConstants.LINKS.get('login').path} element={<UnderMaintenancePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
