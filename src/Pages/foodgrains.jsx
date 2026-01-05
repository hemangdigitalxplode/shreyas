import React from 'react'
import AboutFoodGrains from '../components/AboutFoodGrains';
import ProductRange from '../components/ProductRange';
import ExpandingSlider from '../components/ExpandingSlider';
import CertificationsSection from '../components/CertificationsSection';
import CareerBanner from '../components/CareerBanner';

const FoodGrains = () => {
    return (
        <>
            {/* About section */}
            <div className='aboutGrainsSectionContainer'>
                <AboutFoodGrains />
            </div>
            {/* Product range section */}
            <div className='ourProductRangeContainer'>
                <ProductRange />
            </div>
            {/* Slider section */}
            <div className='sliderSectionContainer'>
                <ExpandingSlider />
            </div>
            {/* certificate section */}
            <div className='certificationSectionContainer'>
                <CertificationsSection />
            </div>
            {/* Cta section */}
            <div className='certificationSectionContainer'>
                <CareerBanner />
            </div>
        </>
    )
}

export default FoodGrains;