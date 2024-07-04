import PieChart from './PieChart';
import avater1 from '../assets/Images/avater1.jpg'
import avater2 from '../assets/Images/avater.jpeg'
import avater3 from '../assets/Images/avater3.jpg'
import avater4 from '../assets/Images/avater4.jpg'
import certificate from '../assets/Images/contract.png'
import coin from '../assets/Images/coin.png'
import video from '../assets/Images/video-chat.png'
import { FaStar } from "react-icons/fa6";
const Hero = () => {
    return (
        <div className=" px-8 pt-12">
            <div className="container mx-auto">

                <div className="flex justify-center items-center ">
                    <h1 className="text-3xl font-bold text-center leading-tight lg:-mb-20 md:mb-5 mb-4  text-[#020043]">
                        Comprehensive Care <br /> for Every Patient
                    </h1>
                </div>
                <div className="flex lg:flex-row md:flex-col flex-col items-center justify-center lg:items-end md:items-center gap-4 text-center">
                    <div className="flex flex-col bg-white p-6 rounded-lg shadow-md h-[312px] w-[216px] text-start">
                        <div className="text-4xl font-bold mb-4 text-[#020043]">90%</div>
                        <p className=" text-[#020043]">Patient satisfaction rate, reflecting our commitment.</p>
                        <div className="flex justify-center xl:mt-4 lg:mt-0">
                            <PieChart />
                        </div>
                    </div>
                    <div className="flex flex-col  bg-white p-6 rounded-lg shadow-md h-[190px] w-[216px] text-start relative" >
                        <div className="text-4xl font-bold mb-4 text-[#020043]">500+</div>
                        <p className="text-[#020043]">Board-certified <br /> doctors</p>
                        <img className='xl:w-[77px] xl:h-[77px] lg:w-[55px] lg:h-[65px] absolute xl:bottom-3 xl:right-5 lg:bottom-1 lg:right-1 w-[77px] h-[77px] bottom-4 right-4' src={certificate} alt="" />
                    </div>
                    <div className="flex flex-col text-start bg-white p-6 rounded-lg shadow-md h-[162px] w-[216px]">
                        <div className="flex items-center text-4xl text-[#020043] font-bold">
                            4.8 <FaStar className="ml-1 text-[#FFE03D]" />
                        </div>
                        <p className="text-[#020043] mb-2">Over 20,000 Patient</p>
                        <div className="flex -space-x-4 rtl:space-x-reverse ">
                            <div className="w-12 h-12 overflow-hidden rounded-full">
                                <img className="w-full h-full" src={avater3} />
                            </div>
                            <div className="w-12 h-12 overflow-hidden rounded-full">
                                <img className="w-full h-full " src={avater1} />
                            </div>
                            <div className="w-12 h-12 overflow-hidden rounded-full">
                                <img className="w-full h-full" src={avater2} />
                            </div>
                            <div className="w-12 h-12 overflow-hidden rounded-full">
                                <img className="w-full h-full" src={avater4} />
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col text-start bg-white p-6 rounded-lg shadow-md h-[190px] w-[216px] relative">
                        <div className="text-4xl font-bold mb-4 text-[#020043]">$5000</div>
                        <p className="text-[#020043]">Money spend
                            for poor patient</p>
                        <img className='xl:w-[77px] xl:h-[77px] lg:w-[55px] lg:h-[65px] absolute xl:bottom-3 xl:right-5 lg:bottom-1 lg:right-1 w-[77px] h-[77px] bottom-4 right-4' src={coin} alt="" />
                    </div>
                    <div className="flex flex-col text-start bg-white p-6 rounded-lg shadow-md h-[312px] w-[216px] ">
                        <div className="text-4xl font-bold mb-4 text-[#020043]">50+</div>
                        <p className="text-[#020043]">Free lession video
                            for patient</p>

                            <img className='w-[132px] h-[127px] mx-auto mt-12' src={video} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
