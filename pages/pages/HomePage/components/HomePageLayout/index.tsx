import React, { FunctionComponent } from "react";
import Head from 'next/head'

interface HomePageLayoutProps {
    activeItem: string
}

import styles from './styles/styles.module.css'

export const HomePageLayout: FunctionComponent<HomePageLayoutProps> = ({ activeItem }) => {
    return (
        <div className={styles.home__page}>
            <Head>
                <title>Надежда</title>
                <meta name="description" content="Сайт является сборником вдохновляющих высказываний и афоризмов выдающихся людей" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.active__text}>
                {activeItem}
            </div>
        </div >
    )
}