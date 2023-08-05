import Header from '../Header/index';
import Footer from '../Footer/index';

const Layout = ({children}) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;