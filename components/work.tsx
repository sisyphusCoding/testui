import React,{FC, ReactNode} from "react";
import Link from "next/link";

interface Props {
  children: ReactNode
}

export const WorkContainter:FC<Props> =({children}) => (


  <div className="
   grid grid-cols-1 lg:grid-cols-2
   w-full min-h-screen 
    
    "
  >{children}</div>

)



export const WorkBackground: FC = () => (
  
  <div
    className="grid grid-cols-1 lg:grid-cols-2 
      min-h-screen  min-w-full 
      sticky top-0
     bg-black h-[30vh] lg:h-auto"
    >
      <div
      className="bg-black h-[30vh] lg:h-auto"
     >

    </div>

      <div className="bg-white h-[70vh] lg:min-h-screen">

    </div>
  </div>
    
)

interface Left {
  children:ReactNode 
  progress:number
}

export const WorkLeft:FC<Left> =({children,progress}) => {

  let translateY = Math.max(0,50-progress*3*50)
  if(progress>0.85) translateY = Math.max(-50,-(progress-0.85)*2*50)
  return(
    <div
     className="flex flex-col items-center justify-center text-3xl lg:text-4xl h-[30vh] lg:h-[auto]"
   
    style={{transform:`translate3d(0,${translateY}px,0)`}}
        >
      <div className="leading-10">
              {children}
      </div>
    </div>
  )

}


export const WorkRight:FC<Left> =({children,progress})=>{


  let translateY = Math.max(-50,-(progress-0.5)*50)

  return(
    <div
     className="h-screen flex flex-1 lg:items-center justify-center"
    style={{transform:`translate3d(0,${translateY}px,0)` }}
      >
      <div className="w-full max-w-md pt-10 lg:pt-0 px-10 md:px-0">
          {children}
      </div>
    </div>
  )


}
