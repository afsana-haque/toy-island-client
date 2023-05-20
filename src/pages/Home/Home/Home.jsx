import React from 'react';
import Banner from '../Banner/Banner';
import GallerySection from '../GallerySection/GallerySection';
import Toy from '../Toy/Toy';
import SubCategory from '../SubCategory/SubCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <GallerySection></GallerySection>
            <SubCategory></SubCategory>
            <Toy></Toy>
        </div>
    );
};

export default Home;