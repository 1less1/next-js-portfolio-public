import Head from 'next/head';

import HobbiesHeader from '@/components/hobbies/hobbies_header';
import HobbiesCardSwiper from '@/components/hobbies/hobbies_card_swiper';

export default function Hobbies() {

    return (

        <>

            <Head>

                <link
                    rel="preload"
                    href="/images/hobbies/hobbies_cover_card.webp"
                    as="image"
                />

                <link
                    rel="preload"
                    href="/images/hobbies/lego_collection.webp"
                    as="image"
                />

                <link
                    rel="preload"
                    href="/images/hobbies/lego_commander_fox.webp"
                    as="image"
                />

            </Head>

            <main>

                <HobbiesHeader/>

                <HobbiesCardSwiper/>

            </main>

        </>

    );


};