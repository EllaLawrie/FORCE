import React from "react";
import Image from "next/image";

type Props = {
  imageURL: string;
  heading: string;
  paragraph: string;
  date: string;
};

const SingleFeedback = ({ imageURL, heading, paragraph, date }: Props) => {
  return (
    <div className="flex  w-full lg:w-[456px] bg-[#F5F9FA] rounded-[5.38754px] px-6 py-4 mb-5">
      <div className="lg:h-[52px] lg:w-[52px] rounded-full mr-2 overflow-hidden relative h-[72px] w-[72px]">
        <Image width={100} height={100}  src={imageURL} alt={heading}  />
      </div>
      <div className="flex-col items-center ">
        <h3 className="font-semibold text-xs text-brandBlack lg:text-sm mb-1">
          {heading}
        </h3>
      
      <p className="font normal text-xs text-lightBlue lg:text-sm mb-5">
        {paragraph}
      </p>
      <p className="font italic text-xs text-lightBlue lg:text-sm">{date}</p>
      </div>
    </div>
  );
};

export default SingleFeedback;
