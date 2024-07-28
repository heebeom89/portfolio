import SectionTitle from "../SectionTitle";
import ProjectItem from "./ProjectItem";

import { DataProps } from "@/types";

const Project = ({ project }: Pick<DataProps, "project">) => {
  return (
    <>
      <div>
      <div className="leading-[1.15] text-center text-5xl font-waguri text-decoration-2 text-underline-offset-4 relative mb-6">
        Project
      <div className="absolute bottom-[-10px] left-[365px] right-[365px] h-1 bg-red-500"></div>
      </div>
        <div className="flex flex-col gap-24">
          {[...project]
            .filter((project) => project.isTeam)
            .map((project) => (
              <ProjectItem key={project.id} {...project} />
            ))}
        </div>
      </div>
      {/* <div>
        <SectionTitle>Personal Project</SectionTitle>
        <div className="flex flex-col gap-24">
          {[...project]
            .reverse()
            .filter((project) => !project.isTeam)
            .map((project) => (
              <ProjectItem key={project.id} {...project} />
            ))}
        </div>
      </div> */}
    </>
  );
};

export default Project;
