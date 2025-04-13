"use client";
import React, { useState } from "react";
import ContentCard from "@/components/home/content_card";
import InstaModal from "@/components/lego/insta_modal";
import "@/globals.css";
import "@/angled_divider.css";

const ThreeWayPostGrid = ({ posts = [] }) => {
    
    const [selectedPost, setSelectedPost] = useState(null);

    const handleCardClick = (post) => {
        setSelectedPost(post);
    };

    const handleCloseModal = () => {
        setSelectedPost(null);
    };

    return (

        <div className="relative w-11/12 mx-auto border-[8px] md:border-[10px] lg:border-[12px] border-white bg-white">

            {/* Small Screens Layout (Stacked Columns) */}
            <div className="flex flex-col md:hidden min-h-[425px] h-[75vh]">

                {/* Top Section */}
                <div className="relative flex overflow-hidden bg-black items-center justify-center clip-bottom-edge flex-[33.33%]">
                    {posts[0] && (
                        <ContentCard
                            media={posts[0].mediaUrl}
                            thumbnail={posts[0].thumbnailUrl}
                            mediaType={posts[0].mediaType}
                            onClick={() => handleCardClick(posts[0])}
                        />
                    )}
                </div>

                {/* Middle Section */}
                <div className="relative flex overflow-hidden bg-black items-center justify-center clip-vertical-edges flex-[33.33%]">
                    {posts[1] && (
                        <ContentCard
                            media={posts[1].mediaUrl}
                            thumbnail={posts[1].thumbnailUrl}
                            mediaType={posts[1].mediaType}
                            onClick={() => handleCardClick(posts[1])}
                        />
                    )}
                </div>

                {/* Bottom Section */}
                <div className="relative flex overflow-hidden bg-black items-center justify-center clip-top-edge flex-[33.33%]">
                    {posts[2] && (
                        <ContentCard
                            media={posts[2].mediaUrl}
                            thumbnail={posts[2].thumbnailUrl}
                            mediaType={posts[2].mediaType}
                            onClick={() => handleCardClick(posts[2])}
                        />
                    )}
                </div>

            </div>

            {/* Medium and Larger Screens Layout (Three Columns) */}
            <div className="relative hidden md:flex min-h-[300px] max-h-[75vh]">

                {/* Left Section */}
                <div className="relative flex overflow-hidden bg-black items-center justify-center clip-right-edge flex-[33.33%]">
                    {posts[0] && (
                        <ContentCard
                            media={posts[0].mediaUrl}
                            thumbnail={posts[0].thumbnailUrl}
                            mediaType={posts[0].mediaType}
                            onClick={() => handleCardClick(posts[0])}
                        />
                    )}
                </div>

                {/* Middle Section */}
                <div className="relative flex overflow-hidden bg-black items-center justify-center clip-horizontal-edges flex-[33.33%]">
                    {posts[1] && (
                        <ContentCard
                            media={posts[1].mediaUrl}
                            thumbnail={posts[1].thumbnailUrl}
                            mediaType={posts[1].mediaType}
                            onClick={() => handleCardClick(posts[1])}
                        />
                    )}
                </div>

                {/* Right Section */}
                <div className="relative flex overflow-hidden bg-black items-center justify-center clip-left-edge flex-[33.33%]">
                    {posts[2] && (
                        <ContentCard
                            media={posts[2].mediaUrl}
                            thumbnail={posts[2].thumbnailUrl}
                            mediaType={posts[2].mediaType}
                            onClick={() => handleCardClick(posts[2])}
                        />
                    )}
                </div>

            </div>

            {/* Modal for displaying the selected post */}
            {selectedPost && (
                <InstaModal
                    media={selectedPost.mediaUrl}
                    caption={selectedPost.caption}
                    onClose={handleCloseModal}
                />
            )}
            
        </div>

    );
};

export default ThreeWayPostGrid;
