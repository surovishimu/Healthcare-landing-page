import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TestimonialCard from "./TestimonialCard";

const TestimonialsCarousel = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('testimonial.json')
            .then(response => response.json())
            .then(data => {
                setReviews(data);
            })
            .catch(error => {
                console.error('Error fetching the reviews data:', error);
            });
    }, []);

    const chunkReviews = (array, size) => {
        return array.reduce((chunks, item, index) => {
            const chunkIndex = Math.floor(index / size);
            if (!chunks[chunkIndex]) {
                chunks[chunkIndex] = [];
            }
            chunks[chunkIndex].push(item);
            return chunks;
        }, []);
    };

    const renderTestimonials = () => {
        const chunkedReviews = chunkReviews(reviews, 3);
        return chunkedReviews.map((chunk, index) => (
            <div key={index} className="flex">
                {chunk.map((review) => (
                    <TestimonialCard key={review.id} review={review} />
                ))}
            </div>
        ));
    };

    return (
        <div className="max-w-7xl mx-auto py-8 mt-20">
            <div className="text-start mb-8">
                <button className="btn btn-outline rounded-3xl mb-5 hover:bg-[#020043]">Testimonial</button>
                <h1 className="text-[#020043] text-3xl font-semibold mb-5">What they say about us</h1>
            </div>
            <div className="flex justify-center">
                <Carousel
                    showThumbs={false}
                    infiniteLoop
                    useKeyboardArrows
                    autoPlay
                    interval={5000}
                    showStatus={false}
                    showIndicators={true}
                    className="relative w-full"
                    renderThumbs={() => {}} 
                    renderIndicator={(onClickHandler, isSelected, index, label) => {
                        const indicatorStyle = {
                            width: '8px',
                            height: '8px',
                            margin: '0 5px', 
                            background: isSelected ? 'yellow' : '#ccc', 
                            cursor: 'pointer',
                            borderRadius: '50%',
                            display: 'inline-block',
                        };
                        return (
                            <li
                                key={index}
                                style={indicatorStyle}
                                onClick={onClickHandler}
                                onKeyDown={onClickHandler}
                                role="button"
                                tabIndex={0}
                                aria-label={label || `Slide ${index}`}
                            />
                        );
                    }}
                >
                    {renderTestimonials()}
                </Carousel>
            </div>
        </div>
    );
};

export default TestimonialsCarousel;
