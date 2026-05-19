import Footer from "./Footer";
import Main from "./Main";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Pricing from "./Pricing";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Main />
            <Footer />
            <Profile />
            <Pricing />
        </div>
    )
}

export default Layout;