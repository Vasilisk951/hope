import React, { useEffect, useState, useMemo } from 'react';

import HomePageLayout from '../components/HomePageLayout';

const HomePageContainer = () => {

    const helpPhrases = useMemo(() => {
        return [
            'Честность с собой очень важна; иначе жизнь не будет течь правильно. А если ты умеешь быть честной с собой, ты легко обретешь большую мудрость. Многие вещи, которые люди считают важными, покажутся тебе незначительными или даже бессмысленными.',
            'Тот, кто обеспокоен своими бедами, никогда не узнает истинной любви и сострадания. Любить по-настоящему могут только те, кого личное больше не тревожит».',
            'Каждое ваше мнение о чем-либо способно стать ограничением»',
            'Чем искреннее ты к себе относишься, тем яснее видишь события и тем меньше добавляешь к ним мелодрамы в попытке сделать жизнь насыщеннее и интереснее. Без этой мелодрамы ты будешь становиться все свободнее и свободнее, а запутанность начнет уходить. Ты будешь рассекать одну мешающую тебе веревку за другой и неуклонно подниматься к возвышенной реальности.',
            'Ты – не только разум. Есть и другие аспекты тебя. У тебя есть тело, эмоции, энергия. Использовать только один из этих аспектов – например, разум – все равно что ехать на машине с одним колесом. Нужны все четыре.',
            'Как утверждает Садхгуру, если вы йогин, то с вами ничего плохого не случится – ведь на свете нет ничего, что вы не могли бы использовать для своего окончательного роста. Йогин может быть счастлив даже в аду. Если вы счастливы, нет такого явления, как ад.',
            'Любовь – это твое качество. Ты просто используешь окружающие предметы и людей как стимулы для того, чтобы найти выражение этому качеству. Если ты привнесешь достаточно осознанности в различающий интеллект, ты увидишь, что любовь – это единственно возможный способ бытия. Любовь – это не то, что вы делаете. Любовь – это то, чем вы являетесь.'
        ]
    }, []);

    const [activeItem, setActiveItem] = useState(helpPhrases[0]);

    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    useEffect(() => {
        setInterval(() => {
            setActiveItem(helpPhrases[getRandomInt(helpPhrases.length - 1)])
        }, 15000);
    }, [helpPhrases]);

    return <HomePageLayout
        activeItem={activeItem}
    />
}

export default HomePageContainer;