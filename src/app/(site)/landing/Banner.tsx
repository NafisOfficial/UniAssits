import { BtnGradient } from "@/components/common/buttons/BtnGradient";
import { BtnOutline } from "@/components/common/buttons/BtnOutline";
import Image from "next/image";

export const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row mt-10 mx-20">
      <div className="w-1/2 flex flex-col gap-5">
        <h1 className="text-7xl">Your University, One Question away.</h1>
        <p className="text-3xl">
          Ask about fees, departments, locations, bus schedules, contacts,
          admissions & more. Upload PDFs and our AI learns automatically — with
          cited answers and relevant images.
        </p>
        <div className="flex gap-5">
          <BtnGradient label="Start Asking" />
          <BtnOutline label="Explore Features"/>
        </div>
        <div className="bg-[linear-gradient(91.93deg,#FFF4E4_1.63%,rgba(232,175,127,0.31)_97.99%)] flex gap-5 py-2 items-center border border-white px-5">
          <Image src={"/icons/spark.png"} alt="alt" width={67} height={67} />
          <p><span className="font-bold">Fast answers</span> under 3 seconds, in <span className="font-bold">Bangla or English</span>, <span className="font-semibold">always with sources.</span></p>
        </div>
      </div>
      <div className="w-1/2">

      </div>
    </div>
  );
};
