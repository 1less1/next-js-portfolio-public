"use client";
import React, { useState, useEffect } from "react";
import InstaPostContentCard from "@/components/lego/insta_post_content_card";
import InstaModal from '@/components/lego/insta_modal';
import '@/projects.css'

const InstaPostGrid = ({ posts, error }) => {

  const [selectedPost, setSelectedPost] = useState(null); 
      const handleCardClick = (post) => {
          setSelectedPost(post); 
      };
  
      const handleCloseModal = () => {
          setSelectedPost(null);
      };
  
  const [loaded, setLoaded] = useState(false);

  // Set loaded to true once posts are available
  useEffect(() => {
    if (posts && posts.length) {
      setLoaded(true);
    }
  }, [posts]);

  return (

    <div className="flex flex-col items-center w-full md:w-10/12 lg:w-9/12 mx-auto -mt-8">

      {/* Error Display */}
      {error || !posts || !posts.length ? (

        <div className="flex justify-center items-center my-[100px]">
          <p className="text-white text-xl font-bold">{error}</p>
        </div>

      ) : (

        // Content with no error
        <div 
        className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-stretch" 
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 3s ease-in-out",  // Apply fade-in transition
        }}>
          
          {posts.map((post, index) => (
            <div key={post.id}>
              <InstaPostContentCard
                media={post.mediaUrl}
                thumbnail={post.thumbnailUrl}
                mediaType={post.mediaType}
                onClick={() => handleCardClick(post)}
              />

            </div>

          ))}

          {/* Modal for displaying the selected post */}
          {selectedPost && (
            <InstaModal 
              media={selectedPost.mediaUrl} 
              caption={selectedPost.caption} 
              mediaType={selectedPost.mediaType}
              onClose={handleCloseModal} 
            />
          )}

        </div>

      )}
      

      {/* Instagram Linked Button */}
      <a 
        href="https://www.instagram.com/slickbrickcentral" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`self-end px-4 py-2 bg-black text-white font-semibold text-sm md:text-base rounded hover:bg-white hover:text-black transition duration-300 my-8`}
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 3.5s ease-in-out",  // Apply fade-in transition
        }}>
        Visit my Instagram for more...
      </a>


    </div>

  );

};

export default InstaPostGrid;

