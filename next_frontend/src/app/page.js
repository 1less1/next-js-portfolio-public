import Head from 'next/head';

import { fetchInstagramPosts } from '@/utils/instagram';
import SpeechBoxGrid from '@/components/home/speech_box_grid';
import WelcomeAngledGrid from '@/components/home/welcome_angled_grid';
import ThreeWayPostGrid from '@/components/home/three_way_post_grid';
import NewestPostHeader from '@/components/home/newest_posts_header';

export default async function Home() {
    try {
        
        let posts = await fetchInstagramPosts();
        posts = posts.slice(0, 3); // Slice the first 3 posts

        return (
            <>

                <Head>

                    <link
                        rel="preload"
                        href="/images/comic_bg_four.webp"
                        as="image"
                    />

                    <link
                        rel="preload"
                        href="/images/svg/welcome_msg.webp"
                        as="image"
                    />

                    <link
                        rel="preload"
                        href="/images/mark_and_moon.webp"
                        as="image"
                    />

                </Head>

                <main>
                    <WelcomeAngledGrid />
                    <SpeechBoxGrid />
                    <NewestPostHeader />
                    <ThreeWayPostGrid posts={posts} />
                </main>
            
            
            
            </>
        );

    } catch (err) {

        return (

            <>

                <Head>

                    <link
                        rel="preload"
                        href="/images/comic_bg_four.webp"
                        as="image"
                    />

                    <link
                        rel="preload"
                        href="/images/svg/welcome_msg.webp"
                        as="image"
                    />

                    <link
                        rel="preload"
                        href="/images/mark_and_moon.webp"
                        as="image"
                    />

                </Head>

                <main>
                    <WelcomeAngledGrid />
                    <SpeechBoxGrid />
                    <NewestPostHeader />
                    <div className="flex justify-center items-center h-[10vh]">
                        <p className="text-white text-xl font-bold">Failed to fetch posts :(</p>
                    </div>
                </main>

            </>

        );

    };
};
