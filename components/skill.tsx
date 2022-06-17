import { win32 } from "path";
import React,{FC, useContext, useRef} from "react";
import { ScrollContext } from "../utils/scroll-observer";


const opacitForBlock = (sectionProgress:number,blockNo:number) =>{
  const progress = sectionProgress - blockNo
  if(progress>=0 && progress<1) return 1
  return 0.2
}

const Skills:FC = () => {
  const {scrollY} = useContext(ScrollContext)
  const refContainer = useRef<HTMLDivElement>(null)
  const numOfPages = 5
  let progress = 0

  const {current: elConatiner} = refContainer
  if(elConatiner){
    const {clientHeight,offsetTop} = elConatiner
    const screenH = window.innerHeight
    const halfH = screenH / 2
    const percentY = Math.min(clientHeight+halfH ,
    Math.max(-screenH,scrollY-offsetTop)+halfH)/clientHeight 
    progress = Math.min(numOfPages - 0.5,Math.max(0.5,percentY*numOfPages))    
    console.log(progress,percentY)
  }


  return(
    <section
    ref={refContainer}
    className="bg-black min-h-screen text-white z-40 min-w-full "
      >
        <p className="
        text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold
        flex flex-col items-baseline justify-center gap-[5vmin] 
        min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36">
       
            <span className='transition-all ease duration-1000'
            style={{opacity:opacitForBlock(progress,0)}}
            >This series cannot go on forever, and so it must come to a halt in some X that is a cause of motion but does not move itself.</span> 
            <span
            style={{opacity:opacitForBlock(progress,1)}}
           className="
              transition-all ease duration-1000 
            inline-block after:content=['_']"
            >The mind that is empty doesn&apos;t react.</span>
          <span
            style={{opacity:opacitForBlock(progress,2)}}
           className='inline-block transition-all duration-1000 ease'
            >
              Thought always assumes that it could make a contribution.
          </span>
           <span
            style={{opacity:opacitForBlock(progress,3)}}
           className='inline-block transition-all duration-1000 ease'
            >
            A great many people think they are thinking when they are merely
rearranging their prejudices.
          </span> 
        <span
           style={{opacity:opacitForBlock(progress,4)}}
         className='inline-block transition-all duration-1000 ease'
         >
          It&apos;s redundant to complain , since nothing foreign has decided what we think and are.
        </span>
      </p>
    </section>
  )
}


export default Skills
