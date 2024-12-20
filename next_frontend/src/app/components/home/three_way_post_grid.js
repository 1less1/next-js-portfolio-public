import React, { useState, useEffect } from 'react';
import ContentCard from '../content_card';
import Modal from '../modal';
import '../../globals.css';
import '../../angled_divider.css';

const ThreeWayPostGrid = ({ posts = [] }) => {

    const [selectedPost, setSelectedPost] = useState(null); // State to manage selected post - Is it "selected" or "NOT selected"?
    // By default, selectedPost is set to "useState(null)"
    // When setSelectedPost() is used to change the state from NULL, React re-renders the content to display changes!

    // Event handlers
    const handleCardClick = (post) => {
        setSelectedPost(post); // This function is triggered when a card is clicked. It sets selectedPost to the post data of the clicked card, which in turn opens the Modal.
    };

    const handleCloseModal = () => {
        setSelectedPost(null); // This function resets selectedPost to NULL, effectively closing the modal when triggered.
    };

    const [isSmallScreen, setIsSmallScreen] = useState(false);
    
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768); // Tailwind's 'md' breakpoint is 768px
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Check initial screen size

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="relative w-11/12 mx-auto border-[8px] md:border-[10px] lg:border-[12px] border-white bg-white">
            {isSmallScreen ? (

                // Alternate Setup for Smaller Screens
                <div className="flex flex-col h-136">

                    {/* Top Section */}
                    <div className="relative overflow-hidden bg-black flex items-center justify-center clip-bottom-edge" style={{ flexBasis: '33.3%' }}>
                        {posts[0] && (
                            <ContentCard 
                                image={posts[0].image} 
                                caption={posts[0].caption} 
                                onClick={() => handleCardClick(posts[0])} 
                            />
                        )}
                    </div>

                    {/* Middle Section */}
                    <div className="relative overflow-hidden bg-black flex items-center justify-center clip-vertical-edges" style={{ flexBasis: '33.3%' }}>
                        {posts[1] && (
                            <ContentCard 
                                image={posts[1].image} 
                                caption={posts[1].caption} 
                                onClick={() => handleCardClick(posts[1])} 
                            />
                        )}
                    </div>

                    {/* Bottom Section */}
                    <div className="relative overflow-hidden bg-black flex items-center justify-center clip-top-edge" style={{ flexBasis: '33.3%' }}>
                        {posts[2] && (
                            <ContentCard 
                                image={posts[2].image} 
                                caption={posts[2].caption} 
                                onClick={() => handleCardClick(posts[2])} 
                            />
                        )}
                    </div>

                </div>

            ) : (

                // Original Setup for Medium Screens and Larger
                <div className="relative flex h-72 md:h-88 lg:h-112">
                    
                    {/* Top Section */}
                    <div className="relative overflow-hidden bg-black flex items-center justify-center clip-right-edge" style={{ flexBasis: '33.3%' }}>
                        {posts[0] && (
                            <ContentCard 
                                image={posts[0].image} 
                                caption={posts[0].caption} 
                                onClick={() => handleCardClick(posts[0])} 
                            />
                        )}
                    </div>

                    {/* Middle Section */}
                    <div className="relative overflow-hidden bg-black flex items-center justify-center clip-horizontal-edges" style={{ flexBasis: '33.3%' }}>
                        {posts[1] && (
                            <ContentCard 
                                image={posts[1].image} 
                                caption={posts[1].caption} 
                                onClick={() => handleCardClick(posts[1])} 
                            />
                        )}
                    </div>

                    {/* Bottom Section */}
                    <div className="relative overflow-hidden bg-black flex items-center justify-center clip-left-edge" style={{ flexBasis: '33.3%' }}>
                        {posts[2] && (
                            <ContentCard 
                                image={posts[2].image} 
                                caption={posts[2].caption} 
                                onClick={() => handleCardClick(posts[2])} 
                            />
                        )}
                    </div>

                </div>
            )}

            {/* Modal for displaying the selected post */}
            {selectedPost && (
                <Modal 
                    image={selectedPost.image} 
                    caption={selectedPost.caption} 
                    onClose={handleCloseModal} 
                />
            )}
            
        </div>
    );
};

export default ThreeWayPostGrid;