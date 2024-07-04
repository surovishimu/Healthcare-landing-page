import { GoArrowUpRight } from 'react-icons/go';
import banner from '../assets/Images/Rectangle 32.png'; 
import logo from '../assets/Images/logo light.png'; 

const Banner2 = () => {
    return (
        <div
            className="hero h-[477px] rounded-3xl overflow-hidden relative mt-24 mb-28"
            style={{
                backgroundImage: `url(${banner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="hero-overlay bg-opacity-60 bg-gradient-to-r from-[#020044] to-transparent"></div>
            <div className="hero-content text-neutral-content ">
                <div className="max-w-md absolute md:left-16 left-5">
                    <h1 className="mb-5 text-5xl font-semibold leading-snug">Get Your <br />
                        First Appointment
                        at 50% Off!</h1>
                    
                    <div className="navbar-end flex justify-start gap-4">
                        <button className="btn md:w-[174px] w-[150px] h-[48px]  text-[#020043] flex items-center justify-center gap-2 hover:bg-[#020043] hover:text-white rounded-xl bg-[#FFC637] font-bold outline-none border-none" >
                            Appointment<GoArrowUpRight className="text-lg" />
                        </button>
                        <button className="btn btn-outline md:w-[174px] w-[145px] h-[48px] border-white text-white flex items-center justify-center gap-2 hover:bg-[#020043] rounded-xl" >
                            Learn More <GoArrowUpRight className="text-lg" />
                        </button>
                    </div>
                </div>
                <div className='absolute top-10 right-10'>
                    <img className='' src={logo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner2;
