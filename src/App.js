import { Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/Home/HomePage';
import BookingPage from './components/pages/Reservations/BookingPage';
import Layout from "./components/layout/Main/Main";
import AppUtils from './utils/AppUtils';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={AppUtils.links.get('home').path} element={<HomePage />} />
        <Route path={AppUtils.links.get('reservations').path} element={<BookingPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
