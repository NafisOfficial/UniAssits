import { Description } from "@/components/landing/Description";
import { Headline } from "@/components/landing/Headline";
import { Title } from "@/components/landing/Title";
import React from "react";

export const Works = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col gap-10">
        <Title text="How it works" />
        <Headline text="From upload to answer in minutes" />
        <Description text="Collect knowledge from PDFs, notices, images and pages. Deliver fast, cited answers with visuals." />
      </div>
    </div>
  );
};
