import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';
import PopularMenu from './PopularMenu/PopularMenu';
import Overlay from '../Shared/Overlay/Overlay';
import MenuCard from './MenuCard/MenuCard';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Overlay></Overlay>
            <PopularMenu></PopularMenu>
            <MenuCard></MenuCard>
        </div>
    );
};

export default Home;