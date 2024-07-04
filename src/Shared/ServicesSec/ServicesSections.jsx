import { GoArrowUpRight } from "react-icons/go";


const ServicesSections = ({ title, description,image }) => {
    return (
        <div className="relative  lg:mt-0 md:mt-10 mt-20 ">
            <div>
                <img className="w-[568px] h-[415px] rounded-3xl" src={image} alt="" />
            </div>

            <div className="bg-[#343268] text-white rounded-3xl w-[370px] h-[150px] text-start pl-5 absolute md:bottom-10 md:left-10 bottom-12 left-2 bg-opacity-70 ">

                <div className="relative">
                    <div className="w-2/3">
                        <h1 className="text-xl mt-2">{title}</h1>
                        <p className="font-thin text-sm mt-3">{description}</p>
                    </div>
                    <button className="bg-[#FFC637] rounded-full w-[48px] h-[48px] text-white flex justify-center items-center text-2xl absolute right-8 -bottom-5">
                        <GoArrowUpRight></GoArrowUpRight>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ServicesSections;