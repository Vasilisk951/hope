import React, { useEffect, useState } from 'react';

import { helpPhrases } from '../../../../data/homepage/phrases';

import HomePageLayout from '../components/HomePageLayout';

const HomePageContainer = () => {

    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    const [activeItem, setActiveItem] = useState(helpPhrases[0]);

    useEffect(() => {
        setInterval(() => {
            setActiveItem(helpPhrases[getRandomInt(helpPhrases.length - 1)]);
        }, 15000);
    }, []);

    return <HomePageLayout
        activeItem={activeItem}
    />
}

export default HomePageContainer;