"use client";
import React, { useState, useEffect } from "react";
import ProjectContentCard from "@/components/projects/project_content_card";
import '@/projects.css'

const xss = require('xss');

const ProjectsGrid = ({ projects }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger the fade-in animation after the component is rendered on page.js
    setLoaded(true);
  }, []);

  return (

    <div className="flex flex-col items-center w-full lg:w-8/12 mx-auto -mt-8">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`transition-all duration-500 fade-in ${loaded ? "fade-in-visible" : ""}`}
            style={{
              animationDelay: `${index * 250}ms`,  // Add a delay for each card
            }}>

            <ProjectContentCard
              image={project.image}
              title={xss(project.title)}
              description={xss(project.description)}
              githublink={xss(project.githublink)}
            />

          </div>

        ))}


      </div>

    </div>

  );

};

export default ProjectsGrid;



