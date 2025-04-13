import { projectInfo } from "@/data/project_info";
import ProjectsHeader from "@/components/projects/projects_header";
import ProjectsGrid from "@/components/projects/project_grid";


export default function Projects() {
    
    return (

        <main>

            <ProjectsHeader/>
            
            <ProjectsGrid projects={projectInfo} />

        </main>

    );
}; 