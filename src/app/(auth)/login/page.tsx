import { Button } from "@/components/common/ui/buttons/Button";
import Input from "@/components/common/ui/buttons/Input";
import { Description } from "@/components/landing/Description";
import { Headline } from "@/components/landing/Headline";
import Link from "next/link";
import React from "react";

const Login = () => {
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
          <Input
            label="email"
            name="email"
            type="email"
            placeholder="you@university.edu"
          />
          <Input
            label="password"
            name="password"
            placeholder="password"
            type="password"
          />
          <div className="flex justify-between items-center">
            <Link
              href={"/forgot-password"}
              className="text-[#6F6565] underline"
            >
              Forget Password?
            </Link>
            <Button label="Log in" className="bg-[#DC6D18]" />
          </div>
          {/* <div className="flex gap-5 text-[#6F6565] w-full items-center mx-auto px-10 mt-4">
            <p className="border border-[#6F6565] w-3/4" />
            OR
            <p className="border border-[#6F6565] w-3/4" />
          </div> */}
          <p className="text-black">New here? <Link href={"/signup"} className="font-bold">Click Sign</Link> above.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
