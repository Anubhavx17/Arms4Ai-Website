import React from "react";
import Sectionbar from "../components/Sectionbar";
import PageLoader from "../components/PageLoader";

import elipse2 from "../assets/Ellipse 59 (1).png";
import image1 from "../assets/Group 3494.png";

export default function Industry() {
  return (
    <>
      <PageLoader />
      <div className="bg-eclipse-dark relative">
        <div className="containers">
          <div className="pb-[50px] lg:pb-[5vw] pt-[200px] lg:pt-[15vw] ">
            <h1 className="text-white text-center text-[50px] lg:text-[4vw] leading-normal font-extrabold stroke-title relative z-[3]">
              Industry Wise Use Cases
            </h1>
            <div className="containers overflow-hidden hidden lg:block w-[100%] lg:mt-[16vw] mt-[50px] relative z-[3]">
              <img src={image1} alt="" className="w-[100%]"></img>
            </div>
          </div>
        </div>

        {/* <div>
            <img src={elipse2} alt='' className='absolute top-[28vw] right-0 z-[0] w-[100%] h-[100vw] hidden lg:block' />
          </div> */}
        <div className="absolute top-[28vw] right-0 z-[0] w-[100%] h-[100vw] hidden lg:block">
          <svg
            width="1920"
            height="476"
            viewBox="0 0 1920 456"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              id="ellipse-path"
              cx="828"
              cy="995"
              rx="1334"
              ry="994"
              stroke="#B6AFAF"
              stroke-width="2"
            />
            <circle class="moving-circle" r="10" fill="white" />
          </svg>
        </div>
      </div>

      <Sectionbar />
    </>
  );
}
