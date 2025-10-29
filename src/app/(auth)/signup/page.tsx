import { Button } from "@/components/common/ui/buttons/Button";
import Input from "@/components/common/ui/buttons/Input";
import { Description } from "@/components/landing/Description";
import { Headline } from "@/components/landing/Headline";
import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex bg-[linear-gradient(92deg,#FFF4E4_1.63%,rgba(232,175,127,0.31)_97.99%)] bg-clip-text text-transparent shadow-lg mx-20">
        <div className="w-1/2 text-[#FFF4E4] p-20 bg-linear-to-r from-[#624E40] to-[#937964] flex flex-col gap-5 rounded-l-md">
          <Headline
            text="Welcome 👋Your university, one question away."
            className="text-left text-[#FFF4E4]"
          />
          <Description
            text="Ask about fees, departments, locations, bus schedules, or
            any notice. Bangla & English supported."
            className=""
          />
          <ul className="flex flex-col gap-5">
            <div className="flex gap-5 items-center">
              <p className="h-2.5 w-2.5 bg-[#DC6D18] rounded-full"></p>
              <span>Glass‑smooth experience with real‑time answers</span>
            </div>
            <div className="flex gap-5 items-center">
              <p className="h-2.5 w-2.5 bg-[#DC6D18] rounded-full"></p>
              <span>Admin uploads PDFs → AI learns automatically</span>
            </div>
            <div className="flex gap-5 items-center">
              <p className="h-2.5 w-2.5 bg-[#DC6D18] rounded-full"></p>
              <span>Always cited answers and inline images</span>
            </div>
          </ul>
        </div>
        <div className="w-1/2 rounded-r-md bg-[#eec49b] p-20 flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <Input
              label="First name"
              name="first name"
              type="text"
              placeholder="first name"
            />
            <Input
              label="last name"
              name="last name"
              type="text"
              placeholder="last name"
            />
          </div>
          <Input
            label="university email"
            name="email"
            type="email"
            placeholder="you@university.edu"
          />
          <div className="flex justify-between items-center">
            <Input
              label="password"
              name="password"
              placeholder="password"
              type="password"
            />
            <Input
              label="confirm"
              name="confirm"
              placeholder="confirm"
              type="password"
            />
          </div>
          <Button label="Create Account" className="bg-[#DC6D18]" />
          {/* <div className="flex gap-5 text-[#6F6565] w-full items-center mx-auto px-10 mt-4">
            <p className="border border-[#6F6565] w-3/4" />
            OR
            <p className="border border-[#6F6565] w-3/4" />
          </div> */}
          <p className="text-black">
            Already have an account? Switch to {" "}
            <Link href={"/signup"} className="font-bold">
              Log in
            </Link>{" "}
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
