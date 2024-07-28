import GithubIcon from "@/assets/images/github2.svg";

const Contact = () => {
  return (
    <>
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="leading-[1.15] text-center text-5xl font-waguri text-decoration-2 text-underline-offset-4 relative mb-4">
          Contact
          <div className="absolute bottom-[-10px] left-[360px] right-[360px] h-1 bg-yellow-500"></div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
  <div className="text-xl font-bold">
    Email : kaka4481@gmail.com
  </div>
  <a target="_blank" rel="noreferrer" href={'https://github.com/heebeom89?tab=repositories'} className="w-fit">
    <GithubIcon className="hover:text-PRIMARY_HEAVY dark:hover:text-GRAY_HEAVY md:fill-current fill-BLACK dark:fill-white" />
  </a>
</div>
    </div>
   
   </>
  ); 
};

export default Contact;