import Footer from "./Footer";
import Main from "./Main";
import Navbar from "./Navbar";
import Profile from "./Profile";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Main />
            <Footer />
            <Profile username="John Doe" />
        </div>
    )
}

export default Layout;