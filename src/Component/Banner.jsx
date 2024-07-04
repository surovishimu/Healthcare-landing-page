import banner from '../../src/assets/Images/Rectangle 5.png';

const Banner = () => {
    return (
        <div className="w-full flex justify-center mt-8 ">
            <img 
                className="w-[1160px] h-auto rounded-lg" 
                src={banner} 
                alt="Banner" 
            />
        </div>
    );
};

export default Banner;
