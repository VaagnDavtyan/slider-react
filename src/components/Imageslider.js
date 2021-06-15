import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Imageslider = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlider = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    };

    const prevSlider = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    


if(!Array.isArray(slides) || slides.length <= 0) {
    return null
}



    return  (
    <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlider} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlider} onKeyup={nextSlider} />
    {SliderData.map((slide, index) => {
        return (
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                {index === current && (
                    <img src={slide.image} alt="anithing" className="image" />
                )}
              
            </div>
        )
        
    })}
    </section>
        );
    
};

export default Imageslider
