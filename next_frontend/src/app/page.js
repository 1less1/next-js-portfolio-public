"use client";

import SpeechBoxGrid from './components/home/speech_box_grid';
import WelcomeAngledGrid from './components/home/welcome_angled_grid';4
import ThreeWayPostGrid from './components/home/three_way_post_grid';
import NewestPostHeader from './components/home/newest_posts_header';


const posts = [
    { id: 1, image: "/images/temp_lego/lego_commander_cody.jpg", caption: "Custom decaled Commander Cody patrolling in the forest!" },
    { id: 2, image: "/images/temp_lego/lego_x_wings.jpg", caption: "Finally was able to collect both of Poe Dameron's X-Wings. What beauties!" },
    { id: 3, image: "/images/temp_lego/lego_fireball_and_nemec.jpg", caption: "Two new additions to the Clone Army: AP2 Fireball and Nemec." },
];


export default function Home() {
    return (
        
        <main>
            < WelcomeAngledGrid />
            
            < SpeechBoxGrid />

            < NewestPostHeader />
            
            <ThreeWayPostGrid posts={posts} />
            
        </main>
        
    );
}