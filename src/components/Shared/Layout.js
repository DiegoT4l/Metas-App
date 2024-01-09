import Header from "./Header";
import Principal from "./Principal";
import Footer from "./Footer";
import {Outlet} from "react-router-dom";


function Layout() {
    return (
        <>
            <Header />
            <Principal>
                <Outlet />
            </Principal>
            <Footer />
        </>
    );
}

export default Layout;