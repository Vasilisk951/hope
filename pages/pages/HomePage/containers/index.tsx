import React, { useEffect, useState } from 'react';

import { helpPhrases } from '../../../../data/homepage/phrases';

import HomePageLayout from '../components/HomePageLayout';

const HomePageContainer = () => {

    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    const [activeItem, setActiveItem] = useState(helpPhrases[0]);

    useEffect(() => {
        if (activeItem) {
            setInterval(() => {
                setActiveItem(helpPhrases[getRandomInt(helpPhrases.length)]);
            }, 5000);

        }
    }, [activeItem]);

    return <HomePageLayout
        activeItem={activeItem}
    />
}

export default HomePageContainer;