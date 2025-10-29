import { Headline } from "@/components/landing/Headline";
import { GrAttachment } from "react-icons/gr";
import React from "react";
import { FaArrowUp } from "react-icons/fa6";

const page = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center h-full">
      <Headline text="Good Morning,Ali" />
      <h1
        className={`sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl `}
      >
        How Can I <span className="text-[#DC6D18]">Assist You Today?</span>
      </h1>
      <label className="flex justify-between items-center bg-[#DC6D1833] rounded-full py-2 px-5 w-5/12">
        <div className="flex items-center gap-5">
          <GrAttachment className="text-2xl text-[#E07522]" />
          <input type="text" name="message" placeholder="Ask anything" id="message" className="outline-0" />
        </div>
        <button className="p-4 rounded-full bg-[linear-gradient(137deg,#E07522_4.45%,#F8A65D_97.83%)] cursor-pointer">
          <FaArrowUp className="text-white text-2xl" />
        </button>
      </label>
    </div>
  );
};

export default page;
