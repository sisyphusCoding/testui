import React,{FC} from "react";
import Image from "next/image";



interface Props {
  id:string 
  name:string
  socialID: string
}


const Member : FC<Props> = ({id,name,socialID}) => {
  return(
    <div>
      <Image
        src={`/assets/member/peep-${id}.svg`}
        alt={name}
        width={1366} 
        height={1555}
        /> 
      <div className="text-2xl xl:text-3xl">{name}</div>
      <div className="text-xs">{socialID}</div>
    </div>
  )
}


export default Member
