import React, { useEffect, useState } from 'react';

import { helpPhrases } from './data';

import { HomePageLayout } from '../components/HomePageLayout';

export const HomePageContainer = () => {

    const [activeItem, setActiveItem] = useState(helpPhrases[0]);

    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    useEffect(() => {
        setInterval(() => {
            setActiveItem(helpPhrases[getRandomInt(helpPhrases.length - 1)])
        }, 15000);
    }, []);

    return <HomePageLayout
        activeItem={activeItem}
    />
}