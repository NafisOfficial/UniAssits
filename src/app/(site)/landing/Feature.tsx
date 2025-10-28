import { Description } from "@/components/landing/Description";
import { Headline } from "@/components/landing/Headline";
import { Title } from "@/components/landing/Title";
import React from "react";

export const Feature = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col gap-5">
        <Title text="Features" />
        <Headline text="Everything students and staff need in one AI assistant" />
        <Description text="Collect knowledge from PDFs, notices, images and pages. Deliver fast, cited answers with visuals." />
      </div>
    </div>
  );
};
