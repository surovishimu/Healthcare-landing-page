import { Outlet } from "react-router-dom";
import Nav from "../Shared/Navbar/Nav";
import Footer from "../Shared/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="bg-gradient-to-t from-[#C9DDE7] via-[#FFFFF5] to-[#C9DDE7]">
            <div className="max-w-screen-xl mx-auto px-10">
                <Nav />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
