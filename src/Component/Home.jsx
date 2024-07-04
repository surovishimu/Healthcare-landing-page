import { Element } from 'react-scroll';
import About from "./About";
import Banner from "./Banner";
import Banner2 from "./Banner2";
import Cards from "./Cards";
import Faq from "./Faq";
import Services from "./Services";
import TestimonialsCarousel from "./TestimonialsCarousel";

const Home = () => {
    return (
        <div className="">
            <Element name="home">
                <Banner />
            </Element>
            <Cards />
            <Element name="about">
                <About />
            </Element>
            <Element name="services">
                <Services />
            </Element>
            <Element name="blog">
                <TestimonialsCarousel />
            </Element>
            <Faq />
            <Banner2 />
        </div>
    );
};

export default Home;
