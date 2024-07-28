
import { DataProps } from "@/types";
import SkillsItem from "./SkillsItem";

const Skills = ({ skills }: Pick<DataProps, "skills">) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
      <div className="leading-[1.15] text-center text-5xl font-waguri text-decoration-2 text-underline-offset-4 relative mb-4">
        Skills
        <div className="absolute bottom-[-10px] left-[395px] right-[390px] h-1 bg-green-500"></div>
      </div>
        {[...skills].map((skills)=>
          <SkillsItem key={skills.id} {...skills}/>  
        )}
      </div>
    </div>
  ); 
};

export default Skills;
