import { Link as ScrollLink } from 'react-scroll';
import logo from '../../assets/Images/logo dark.png';
import { GoArrowUpRight } from "react-icons/go";

const Nav = () => {
    const links = (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full lg:w-auto ">
            <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer"
                activeClass="font-bold"
            >
                Home
            </ScrollLink>
            <ScrollLink
                to="services"
                smooth={true}
                duration={500}
                className="cursor-pointer"
                activeClass="font-bold"
            >
                Services
            </ScrollLink>
            <ScrollLink
                to="blog"
                smooth={true}
                duration={500}
                className="cursor-pointer"
                activeClass="font-bold"
            >
                Blog
            </ScrollLink>
            <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer"
                activeClass="font-bold"
            >
                About Us
            </ScrollLink>
        </div>
    );

    return (
        <div className="navbar bg-[#C9DDE7] w-full  mx-auto pt-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold "
                    >
                        {links}
                    </ul>
                </div>
                <img className="w-[124.82px] h-[33px] md:block hidden" src={logo} alt="dark-logo" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold ">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline md:w-[174px] w-[145px] h-[48px] border-[#020043] text-[#020043] flex items-center justify-center gap-2 hover:bg-[#020043] rounded-xl" >
                    Appointment <GoArrowUpRight className="text-lg" />
                </a>
            </div>
        </div>
    );
};

export default Nav;
