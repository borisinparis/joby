"use client";

import SwiperBanner from "../../../component/ui/swiperBanner";

export const HomePage = () => {
  return (
    <div className="relative w-screen h-screen  overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/background.png"
          alt="Background"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="relative z-10 flex justify-between w-full h-[20%] px-10">
        <div className="flex w-[50%] items-center justify-between mt-[5%]">
          <h2 className="underline font-bold text-2xl">Харилцагчид</h2>
          <div className="w-[400px] h-[56px]">
            <p className="text-[18px]">
              Lorem ipsum dolor sit amet consectetur. Mauris sed nunc in duis
              massa ac justo cursus pulvinar.
            </p>
          </div>
        </div>
      </div>
      <div className="m-auto">
        <SwiperBanner />
      </div>
      <div className="absolute bottom-5 w-full text-center z-10"></div>
    </div>
  );
};

export default HomePage;
