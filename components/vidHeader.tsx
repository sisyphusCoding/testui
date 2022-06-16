import React, { FC, useContext, useRef } from "react";
import Image from "next/image";
import { ScrollContext } from "../utils/scroll-observer";

const VidHeader: FC = () => {

  const refContainer = useRef<HTMLDivElement>(null)

  //unpack scrollY
  
  const {scrollY} = useContext(ScrollContext)

  let progress = 0


  const {current:elContainer} = refContainer

  if(elContainer){
    progress = Math.min(1,scrollY / elContainer.clientHeight) 
  }

  return (
    <section
      style={{transform:`translate3d(0,-${progress*25}vh,0)`}}
      ref={refContainer}
      className="
      top-0
      sticky
      transition-transform ease-linear duration-[0s] 
      will-change-transform
      min-w-full
      min-h-screen flex flex-col items-center justify-center"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 min-w-full min-h-screen object-cover"
      >
        <source src="/assets/test.mp4" type="video/mp4" />
      </video>

      <div
        className="
            text-zinc-200
            mix-blend-multiply
            bg-black bg-opacity-30
            min-h-screen min-w-full
            backdrop-blur-[.25vh] backdrop-filter
            flex flex-col items-center justify-center text-center
            p-12 font-bold z-10 "
      >
        <h1
          className="mb-6 text-6xl xl:text-7xl 
            drop-shadow-[3px_3px_0_black]  "
        >
          Recto verso
        </h1>
        <h2
          className="
              drop-shadow-[3px_1px_0_black] 
            mb-2 text-2xl xl:text-3xl tracking-tight"
        >
          <span>App Development,</span>
          <span>done right.</span>
        </h2>
      </div>
    </section>
  );
};

export default VidHeader;
