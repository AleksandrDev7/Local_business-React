import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        };
        return (
            <div>
                <Slider {...settings}>
                    <div className="slide_block">
                        <img src="/images/slide_1.png" alt="slide_1"/>
                    </div>
                    <div className="slide_block">
                        <img src="/images/slide_1.png" alt="slide_2"/>
                    </div>
                    <div className="slide_block">
                        <img src="/images/slide_1.png" alt="slide_3"/>
                    </div>
                    <div className="slide_block">
                        <img src="/images/slide_1.png" alt="slide_4"/>
                    </div>
                    <div className="slide_block">
                        <img src="/images/slide_1.png" alt="slide_5"/>
                    </div>
                    <div className="slide_block">
                        <img src="/images/slide_1.png" alt="slide_6"/>
                    </div>
                </Slider>
            </div>
        );
    }
}