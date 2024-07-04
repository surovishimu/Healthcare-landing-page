import { GoArrowUpRight } from "react-icons/go";
import image1 from '../assets/Images/Rectangle 27-2.png'
import image2 from '../assets/Images/Rectangle 27-1.png'
import image3 from '../assets/Images/Rectangle 27.png'
import ServicesSections from "../Shared/ServicesSec/ServicesSections";

const Services = () => {
    return (
        <div className="grid lg:grid-cols-2 md:grid-cols-1 md:gap-10 gap-0 lg:mt-28 mt-16">
            <div className="w-[450px] h-[355px] md:px-0 px-10 lg:ml-0 md:ml-20 -ml-16">
                <button className="btn btn-outline rounded-3xl w-[139px] h-[43px] mb-5 hover:bg-[#020043]">Service</button>
                <h1 className="text-[#020043] text-3xl font-semibold mb-5">Empowering Health, <br />Enriching Lives</h1>
                <p className="text-[#4D4C7B] mb-5">We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.
                </p>
                <div className="navbar-end">
                    <a className="btn md:w-[174px] w-[150px] h-[48px]  text-[#020043] flex items-center justify-center gap-2 hover:bg-[#020043] hover:text-white rounded-xl bg-[#FFC637] font-bold" >
                        Appointment<GoArrowUpRight className="text-lg" />
                    </a>
                </div>
            </div>
            <ServicesSections title={'Advanced Technology'} description={"Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision"} image={image1}></ServicesSections>

            <ServicesSections title={'Online Doctor Meet'} description={"Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision"} image={image2}></ServicesSections>

            <ServicesSections title={'Consultancy your health'} description={"Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision"} image={image3}></ServicesSections>

        </div>
    );
};

export default Services;