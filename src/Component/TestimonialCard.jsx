import ReactStars from 'react-rating-stars-component';

const TestimonialCard = ({ review }) => {
    return (
        <div className="w-full md:w-[33%] p-4 flex-shrink-0 mb-10">
            <div className="bg-white rounded-lg shadow-md p-6 lg:h-[320px] md:h-[520px] h-[320px] flex flex-col justify-between">
                <div>
                    <h2 className="text-xl font-bold mb-2 text-start text-[#020043]">{review.title}</h2>
                    <p className="mb-2 text-start text-[#4D4C7B]">{review.details}</p>
                </div>
                <div className="flex items-center">
                    <div>
                        <img className='avatar w-12 h-12 rounded-full' src={review.image} alt="" />
                    </div>
                    <div className="ml-2">
                        <p className="font-semibold text-[#020043]">{review.name}, <span className='font-thin'>{review.profession}</span></p>
                        <ReactStars
                            count={5}
                            value={review.ratings}
                            size={24}
                            activeColor="#ffd700"
                            edit={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
