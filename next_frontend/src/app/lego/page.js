import { fetchInstagramPosts } from '@/utils/instagram';
import InstaPostGrid from '@/components/lego/insta_post_grid';
import LegoHeader from '@/components/lego/lego_header';

export default async function Lego() {
    try {

        const posts = await fetchInstagramPosts();

        return (

            <>
            
                <main>
                    <LegoHeader/>
                    <InstaPostGrid posts={posts} error={null} />
                </main>

            </>
        );
    } catch (err) {

        return (

            <>

                <main>
                    <LegoHeader/>
                    <InstaPostGrid posts={null} error="Failed to fetch posts :(" />
                </main>

            </>
        );

    }
}
