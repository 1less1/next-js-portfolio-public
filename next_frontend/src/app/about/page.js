import Head from 'next/head';

import AboutMeContentGrid from "@/components/about/about_me_content_grid";
import WorkExpSlider from "@/components/about/work_exp_slider";
import InvAwardsContentGrid from "@/components/about/inv_awards_content_grid";

export default function About() {

    return (

        <>

            <Head>
                
                <link
                    rel="preload"
                    href="/images/headshots/headshot_one.webp"
                    as="image"
                />

                <link
                    rel="preload"
                    href="/images/comic_bg_two.webp"
                    as="image"
                />

                <link
                    rel="preload"
                    href="/images/comic_bg_four.webp"
                    as="image"
                />

                <link
                    rel="preload"
                    href="/images/work/work_exp_slide.webp"
                    as="image"
                />

            </Head>

            <main>

                <AboutMeContentGrid />

                <WorkExpSlider />

                <InvAwardsContentGrid />

            </main>
            
        </>
        
    );

};

