import React from "react";
import Header from "./components/Header/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-row justify-center items-center h-[80%] px-4">
        <div className="flex flex-col justify-start items-start w-full mb-8 flex-grow">
          <h1
            className="text-[40px] w-[496px] font-bold leading-tight tracking-[0.05em] text-left mt-20 ml-44"
            style={{ fontFamily: 'Libre Bodoni', fontWeight: 700 }}
          >
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className="w-full text-[30px] text-[#7d765c] leading-relaxed font-medium tracking-[0.025em] text-left mt-4 ml-44"
            style={{ fontFamily: 'Libre Bodoni', fontWeight: 500 }}
          >
            An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
          </p>
          <button className="text-[30px] mt-8 lg:mt-10 w-[906px] text-white font-serif bg-[#A29875] lg:w-[288px] h-[50px] rounded-lg ml-44">
            Explore Now
          </button>
        </div>
        <div className="w-full mt-4 flex justify-center">
          <Image
            src="/images/img.svg"
            alt="Lady image"
            width={367}
            height={500}
            className="object-contain w-[367px] h-[500px] mt-4"
          />
        </div>
      </div>
    </div>
  );
}
