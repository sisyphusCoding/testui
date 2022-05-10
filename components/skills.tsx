import React, { useContext ,useRef } from "react";

import {Flex , Text} from '@chakra-ui/react'
import { ScrollContext } from "../utils/scroll-observer";


const opacityForBlock = (sectionProgress : number , blockNo: number) => {
    const progress = sectionProgress - blockNo 
    if(progress >= 0 && progress < 1)return 1 
    return 0.2
} 
  


const Skills: React.FC = () => {


    const {scrollY} = useContext(ScrollContext)
    
    const refContiner = useRef<HTMLDivElement>(null)


  const numOfPage = 3
  let progress = 0
  
  const {current: elContainer} = refContiner

  if(elContainer) {
    const {clientHeight, offsetTop} = elContainer
    const screenH = window.innerHeight
    const halfH = screenH  
    const percentY = Math.min(clientHeight + halfH ,   
    Math.max(-screenH , scrollY - offsetTop) + halfH ) / clientHeight
    progress = Math.min(numOfPage - 0.5 , Math.max(0.5 , percentY * numOfPage)  )
  }


    const BigFont:string = 'clamp(1.7rem , 8vmin, 7rem)'
    
    return (
        
        <Flex
          gap={8}
          ref={refContiner}
          textAlign='unset'
          flexDir='column'
          letterSpacing='tighter'
          px={{base:'12' , lg: '20'}}
          py={{base:'20' , lg:'28'}} 
          fontSize={BigFont}
          zIndex={10} bg='black' minH='100vh' minW='100vw' >

              <Text 
                  transition='all 400msease'
                  opacity={opacityForBlock(progress,0)}

                  >Everything we hear is an opinion, not a fact</Text> 
              <Text
                  
                  transition='all 400ms ease'
                  opacity={opacityForBlock(progress,1)}
                  >Everything we see is a perspective, not the truth.</Text>
              <Text
                  
                  transition='all 400ms ease'
                  opacity={opacityForBlock(progress,2)}

                  >If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.</Text>
        </Flex>
        

    )


}


export default Skills
