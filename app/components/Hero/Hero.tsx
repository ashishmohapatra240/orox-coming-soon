"use client";
import Image from "next/image";

import { AppStoreButton } from "../ui/AppStoreButton";
import { PlayStoreButton } from "../ui/PlayStoreButton";

export const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-24 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-8 md:gap-16 lg:gap-48 lg:grid-cols-2">
          {/* Left Content */}
          <div className="relative z-10">
            <p className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#4296E4] to-[#383699]">
              COMING SOON
            </p>
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h1 className="relative text-4xl font-bold leading-tight text-[#19191B] sm:text-5xl md:text-6xl lg:text-7xl">
                  Invest smarter.
                  <br />
                  Grow faster.
                  <br />
                  <span className="relative text-[#D2962B]">
                    {/* Yellow background decoration */}
                    {/* <span className="absolute left-0 top-[35%] -z-10 h-[60%] w-full bg-[#FFD700]/40 rounded-[8px]"></span> */}
                    Build wealth.
                  </span>
                </h1>
                <p className="max-w-[540px] text-base md:text-lg text-gray-600">
                  Forget stock-picking, market timing and waiting for the next
                  bull run—OROX puts your money on autopilot for high-growth
                  returns.
                </p>
              </div>

              <div className="space-y-6">
                {/* <Button>Join for free</Button> */}
                <div className="flex flex-wrap items-center gap-2">
                  <PlayStoreButton />
                  <AppStoreButton />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Hero Image */}
          <div
            className="relative w-full max-w-[420px] mx-auto h-auto flex justify-center items-center cursor-pointer"
            onClick={() => console.log("Hero image clicked")}
          >
            <Image
              src="/images/hero.png"
              alt="OROX Trading Platform Interface"
              width={800}
              height={1200}
              className="w-full object-contain hover:scale-90 transition-transform duration-500 ease-in-out"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
