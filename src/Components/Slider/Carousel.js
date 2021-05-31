import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Card from './Card';

const Slider = () => {
    return(
        <div>
            <Carousel autoPlay interval="5000" showThumbs={false}>
                <Card />
                <Card />
                <Card />
            </Carousel>
        </div>
    )
}

export default Slider;