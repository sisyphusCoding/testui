import React , {useRef , useContext , useState , useCallback} from "react";

import { Icon , Image  ,Text , Flex , Box, VStack , Slide , keyframes} from "@chakra-ui/react";

import {FaAtlassian , FaAngleDown} from 'react-icons/fa'
import { ScrollContext } from "../utils/scroll-observer";
import { trim } from "lodash";


const UberHead: React.FC =() => {

  const refContainer = useRef<HTMLDivElement>(null)
  
  const {scrollY} = useContext(ScrollContext)

  let progress = 0

  const {current: elContainer } = refContainer

  if(elContainer){
    progress = Math.min(1,scrollY / elContainer.clientHeight)
  }


  const H1Size:string = 'clamp(1.5rem , 3vw , 4rem)' 
  const H2Size:string = 'clamp(1.2rem , 2vw , 2.5rem)'
   
  const moveY:string = `-${progress * 20}vh`
  
  
  const showDown = keyframes `
    from{transform:translateY(-1rem)}
    to{transform:translateY(1rem)}
`

  const downAnimation = `${showDown} infinite 1.2s alternate cubic-bezier(1,.85,.23,1.52)`

  return(
    
       <Flex
          zIndex='1'
          top={0}
          transform='auto'
          translateY={moveY}
          ref={refContainer}
          flexDir='column'
          minH='100vh'
          minW='100vw'
          alignItems='center'
          justifyContent='center'
          pos='sticky'   
            >
   
        
    
      

        <Box
          minW='full'
          minH='full'
          src="./background.mp4"
          as='video'
          autoPlay loop muted playsInline
          pos='absolute' 
          objectFit='cover'
          ></Box>
      
          <Icon cursor='pointer' pos='absolute' top={4} zIndex={10} w={12} h={12} as ={FaAtlassian} />
        
      <VStack zIndex={10} filter='auto' dropShadow='0 3px 5px rgba(0,0,0,1)' >
          <Text as='h1' fontSize={H1Size}>BRAND NAME</Text>
          <Text as='h2' fontSize={H2Size} >
            <span>What you do </span>
          </Text> 
        </VStack> 



        <Icon animation={downAnimation} cursor='pointer' pos='absolute' bottom={4} zIndex={10} w={12} h={14} as ={FaAngleDown} />

      </Flex>

          

    )

}


export default UberHead 
