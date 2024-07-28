import { DataProps } from "@/types";


const ResumeTitle = ({ resumeTitle }: Pick<DataProps, "resumeTitle">) => {
  return (
    
    // <div className="bg-gradient-to-r from-GRADIENT_FROM via-PRIMARY to-GRADIENT_TO h-20 flex justify-between items-center px-10">
    /* <a href="https://kr.freepik.com/free-vector/abstract-technological-background_13182208.htm#query=ai%20%EB%B0%B0%EA%B2%BD&position=0&from_view=keyword&track=ais_user&uuid=e0cf48c1-3c61-4a5f-94a0-2cd6d81cb7e1">Freepik</a> */
    <div style={{ backgroundImage: "url('/images/resume/ai.jpg')" }} className="h-full bg-cover bg-center min-h-screen relative" id="home">
    {/* <p>Image by <a href="https://www.freepik.com/free-photo/programming-background-with-html_36238379.htm">Freepik</a></p> */}
    <div className="h-[60px] w-[760px] flex justify-center items-center border-2 border-transparent rounded-b-3xl fixed  z-[9999] right-[100px] bg-black/60 text-white">
      <ul className="flex flex-row space-x-4 list-none">
      <li className="text-white hover:text-gray-300 cursor-pointer pr-[55px]">
            <a href="#home">Home</a>
          </li>
          <li className="text-white hover:text-gray-300 cursor-pointer pr-[55px]">
            <a href="#about">About</a>
          </li>
          <li className="text-white hover:text-gray-300 cursor-pointer pr-[55px]">
            <a href="#skills">Skills</a>
          </li>
          <li className="text-white hover:text-gray-300 cursor-pointer pr-[55px]">
            <a href="#project">Project</a>
          </li>
          <li className="text-white hover:text-gray-300 cursor-pointer">
            <a href="#contact">Contact</a>
          </li>
      </ul>
    </div>   
    <div className="relative">
     <div className="text-7xl font-semibold text-white absolute top-[400px] right-[220px] animate-[fadeIn_1s_ease-in-out_0.1s]">
    {resumeTitle.title.split('').map((char, index) => (
      <span key={index} style={{ ['--index' as any]: index }}
      className={char === ' ' ? 'space' : ''}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
        ))}
      </div>
      </div>
  </div>
  );
};

export default ResumeTitle;
