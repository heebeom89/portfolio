import fsPromises, * as fs from "fs/promises";
import path from "path";

import { NextPage } from "next";

import Footer from "@/components/Footer";
import Information from "@/components/Information";
import Layout from "@/components/Layout";
import Layout1 from "@/components/Layout1";
import Layout2 from "@/components/Layout2";
import Layout3 from "@/components/Layout3";
import Project from "@/components/Project";
import ResumeTitle from "@/components/ResumeTitle";
// import ScrollProgress from "@/components/ScrollProgress";
import { DataProps, InformationProps, SkillsProps, ProjectProps, WorkExperienceProps } from "@/types";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact"
const Home: NextPage<DataProps> = ({
  resumeTitle,
  information,
  skills,
  project,
}) => {
  return (
    <>
      {/* <ScrollProgress /> */}
      <ResumeTitle resumeTitle={resumeTitle} />
      <Layout>
        <Information information={information} />
        {/* <Skills skills={skills} />
        <Project project={project} /> */}
      </Layout>
      <Layout1>
        <Skills skills={skills} />
      </Layout1>
      <Layout2>
        <Project project={project} />
      </Layout2>
      <Layout3>
        <Contact />
      </Layout3>
      {/* <Footer contact={information.contact} name={information.name} /> */}
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fsPromises.readFile(filePath, "utf8");
  const objectData = JSON.parse(jsonData);

  const informationWithData = getImgSrc({
    section: "information",
    item: await getMd({ section: "information", item: { ...objectData.information } }),
  });

  const workExperienceWithData = objectData.workExperience.map(
    async (item: WorkExperienceProps) => {
      return getImgSrc({
        section: "workExperience",
        item: await getMd({ section: "workExperience", item }),
      });
    },
  );

  const projectWithData = objectData.project.map(async (item: ProjectProps) => {
    return getImgSrc({ section: "project", item: await getMd({ section: "project", item }) });
  });
  const skillsWithData = objectData.skills.map(async (item: SkillsProps) => {
    return getImgSrc({ section: "skills", item: await getMd({ section: "skills", item }) });
  });

  return {
    props: {
      ...objectData,
      information: await informationWithData,
      workExperience: await Promise.all(workExperienceWithData),
      project: await Promise.all(projectWithData),
      skills: await Promise.all(skillsWithData),
    },
  };
};

const getMd = async ({
  section,
  item,
}: {
  section: string;
  item: InformationProps | ProjectProps | SkillsProps |WorkExperienceProps;
}) => {
  try {
    const markdownModule = await import(
      `../../public/markdown/${section}/${"id" in item ? item.id : "introduce"}.md`
    );
    return { ...item, markdown: markdownModule.default as string };
  } catch {
    console.log("no markdown");
    return item;
  }
};

const getImgSrc = async ({
  section,
  item,
}: {
  section: string;
  item: InformationProps | ProjectProps | WorkExperienceProps | SkillsProps;
}) => {
  const imgSrc = `/images/${section}/${"id" in item ? item.id : "profile"}.png`;
  const filePath = path.join(process.cwd(), "public", imgSrc);
  try {
    await fs.stat(filePath);
    return { ...item, imgSrc: imgSrc };
  } catch {
    console.log("no img");
    return item;
  }
};
