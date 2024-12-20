"use client";
import ProjectsGrid from "../components/projects/project_grid";
import { projectInfo } from "@/app/data/project_info";


export default function Projects() {
    
    return (

        <main>
            
            <ProjectsGrid projects={projectInfo} />

        </main>

    );
}; 