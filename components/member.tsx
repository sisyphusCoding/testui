import React, { FC, useRef, useState } from "react";
import Image from "next/image";

interface Props {
  id: string;
  name: string;
  socialID: string;
}

const Member: FC<Props> = ({ id, name, socialID }) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const imageRef = useRef<HTMLDivElement>(null);

  return (
    <div className="overflow-hidden py-10 px-5" ref={imageRef}>
      <Image
        className={`
        will-change-transform transform-gpu
        duration-[2s] transition-all ease
        ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-36"}`}
        loading="lazy"
        lazyRoot={imageRef}
        onLoad={() => setLoaded(true)}
        src={`/assets/member/peep-${id}.svg`}
        alt={name}
        width={1366}
        height={1555}
      />
      <div className="text-2xl xl:text-3xl">{name}</div>
      <div className="text-xs">{socialID}</div>
    </div>
  );
};

export default Member;
