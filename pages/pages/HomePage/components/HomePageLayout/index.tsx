import React, { FunctionComponent } from "react";
import Head from 'next/head'

interface HomePageLayoutProps {
    activeItem: {
        text: string,
        author: string
    }
}

import styles from './styles/styles.module.css'

const HomePageLayout: FunctionComponent<HomePageLayoutProps> = ({ activeItem }) => {
    return (
        <div className={styles.home__page}>
            <Head>
                <title>Надежда</title>
                <meta name="description" content="Сайт является сборником вдохновляющих высказываний и афоризмов выдающихся людей" />
                <meta name="keywords" content="Надежда, афоризмы, высказывания" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.active__text}>
                <div className={styles.text}>
                    {activeItem.text}
                </div>
                <div className={styles.author}>
                    &#169;{activeItem.author}
                </div>
            </div>
        </div >
    )
}

export default HomePageLayout;