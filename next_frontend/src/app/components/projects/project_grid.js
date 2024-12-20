import React, { useState, useEffect } from "react";
import ProjectContentCard from "./project_content_card";
import '../../projects.css'

const ProjectsGrid = ({ projects }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger the fade-in animation after the component is rendered on page.js
    setLoaded(true);
  }, []);

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12 w-10/12 lg:w-8/12 mx-auto">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`transition-all duration-500 fade-in ${loaded ? "fade-in-visible" : ""}`}
          style={{
            animationDelay: `${index * 250}ms`,  // Add a delay for each card
          }}>

          <ProjectContentCard
            image={project.image}
            title={project.title}
            description={project.description}
            githublink={project.githublink}
          />

        </div>

      ))}


    </div>

  );

};

export default ProjectsGrid;



