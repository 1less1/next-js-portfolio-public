import React from "react";
import '../../globals.css';

const NewestPostHeader = () => {
    return  (
        <div className="flex justify-center sm:justify-start w-11/12 mx-auto -mb-12 md:-mb-14 lg:-mb-16 -mt-8">
            <div className="w-64 md:w-72 lg:w-88"> 
                <img src="/svg/newest_posts_header.svg" alt="Newest Posts"></img>
            </div>
        </div>

    );

};

export default NewestPostHeader;