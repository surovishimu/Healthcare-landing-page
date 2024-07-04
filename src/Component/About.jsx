import { GoArrowUpRight } from "react-icons/go";
import image1 from '../assets/Images/Rectangle 24.png'


const About = () => {
    return (
        <div className="flex lg:flex-row flex-col  justify-between items-center lg:mt-28 mt-16 xl:gap-0 lg:gap-24">
            <div className="w-[470px] h-[355px] md:px-0 px-10">
                <button className="btn btn-outline rounded-3xl w-[139px] h-[43px] mb-5 hover:bg-[#020043]">Who we are</button>
                <h1 className="text-[#020043] text-3xl font-semibold mb-5">We Help To Get <br />Soultions</h1>
                <p className="text-[#4D4C7B] mb-5">We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
                </p>
                <div className="navbar-end">
                    <a className="btn md:w-[174px] w-[145px] h-[48px]  text-[#020043] flex items-center justify-center gap-2 hover:bg-[#020043] hover:text-white rounded-xl bg-[#FFC637] font-bold" >
                        Learn more <GoArrowUpRight className="text-lg" />
                    </a>
                </div>
            </div>
            <div className="md:relative static lg:mt-0 md:mt-10 mt-20">
                <div>
                    <img className="w-[568px] h-[415px] rounded-lg" src={image1} alt="" />
                </div>

                <div className="bg-[#343268] text-white rounded-3xl w-[395px] h-[210px] text-start pl-5 md:absolute static -bottom-10 -left-20">
                    <h1 className="text-2xl mt-10 md:pt-0 pt-5">Our mission is simple</h1>
                    <p className="font-thin mt-5">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                </div>

            </div>
        </div>
    );
};

export default About;