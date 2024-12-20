"use client";
import WorkExpContentGrid from "../components/about/work_exp_content_grid"; // Older Version Not In Use
import AboutMeContentGrid from "../components/about/about_me_content_grid";
import InvAwardsContentGrid from "../components/about/inv_awards_content_grid";
import WorkExpSlider from "../components/about/work_exp_slider";


export default function About() {

    return (

        <main>

            <AboutMeContentGrid />

            <WorkExpSlider />

            <InvAwardsContentGrid />

        </main>
        
    );
};

