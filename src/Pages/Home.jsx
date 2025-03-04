import React from 'react';
import Banner from './Banner';
import FeaturesSection from './Home/FeaturesSection';
import TechnologiesUsed from './Home/TechnologiesUsed';
import Blog from './Home/Blog';
import FAQS from './Home/faqs';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <FeaturesSection></FeaturesSection>
           <TechnologiesUsed></TechnologiesUsed>
           <Blog></Blog>
           <FAQS></FAQS>
           
        </div>
    );
};

export default Home;