
import Introduce from "./Introduce";

import { DataProps } from "@/types";

const Information = ({ information }: Pick<DataProps, "information">) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div style={{ backgroundImage: "url('/images/aboutme/about_me.png')" }} className="relative"></div>
      <div className="leading-[1.15] text-center text-5xl font-waguri text-decoration-2 text-underline-offset-4 relative">
        About Me
        <div className="absolute bottom-[-10px] left-[345px] right-[345px] h-1 bg-blue-500"></div>
      </div>
      </div>
      <div className="text-xl">
      <Introduce markdown={information.markdown} />
      </div>
    </div>
  );
};

export default Information;
