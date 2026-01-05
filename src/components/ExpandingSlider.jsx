import React, { useState } from "react";
import Slider1 from '../assets/images/slider-1.png'

const slidesData = [
    {
        id: 1,
        img: Slider1,
        title: "Title",
        boxTitle: "State of the Art Manufacturing Infrastructure",
        boxSubTitle: "Japanese Satake Milling & Sortex",
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        title: "Title",
        boxTitle: "Advanced Processing Facilities",
        boxSubTitle: "Global Quality Standards",
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1558979158-65a1eaa08691",
        title: "Title",
        boxTitle: "Integrated Rice Processing",
        boxSubTitle: "Zero Discharge Operations",
    },
    {
        id: 4,
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        title: "Title",
        boxTitle: "High Capacity Manufacturing",
        boxSubTitle: "Export to 30+ Countries",
    },
];


const ExpandingSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="slider-container">
            {slidesData.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`slide ${activeIndex === index ? "active" : ""}`}
                    onClick={() => setActiveIndex(index)}
                >
                    <img src={slide.img} alt={slide.title} />

                    {/* Vertical title (optional if you already have) */}
                    <h2 className="title">{slide.title}</h2>

                    {/* ✅ Bottom Left Info Box (ONLY ACTIVE SLIDE) */}
                    {activeIndex === index && (
                        <div className="info-box">
                            <div className="info-left">
                                {slide.boxTitle}
                            </div>
                            <div className="info-right">
                                {slide.boxSubTitle}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </section>
    );
};

export default ExpandingSlider;
