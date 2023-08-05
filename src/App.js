import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/index';
import Layout from "./components/layout/Main/index";
import AppUtils from './utils/AppUtils';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={AppUtils.links.get('home').path} element={ <Home /> } />
      </Routes>
    </Layout>
  );
};

export default App;
