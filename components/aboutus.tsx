
import React from "react";

import  {Flex, Text} from '@chakra-ui/react'  

import Member from "./members";

const AboutUs : React.FC = () => {
  
  

  const whatWeDo:string = 'The name Oceanpark Swimwear immediately lets you know what it sells. This means its About Us page doesn’t have to rehash that same angle. Instead, it showcases the problem it solves with a series of quotes—a much more compelling start to an About Us page than “We sell swimwear.”'

  const PSize:string = 'clamp(1.2rem , 2.5vw, 2rem)'

  const H2Size:string = 'clamp(1.2rem , 2vw , 2.5rem)'
  
  const member:string[] =  ['member' , 'member','member' , 'member','member' , 'member']
  
  return (
    
    <Flex shadow='0 -.5rem 1rem rgba(0,0,0,.5)'  bg='grey' zIndex='10' gap={8} alignItems='center' justifyContent='flex-start' py={{base:'10' , lg:'20'}} px={8} flexDir='column' minH='100vh'  minW='100vw' color={'black'} >

       
      <Text as='p' maxW='75vw' fontSize={PSize}>{whatWeDo}</Text>
      
      <Text as='h2' fontSize={H2Size} >Our Team </Text> 
        
      <Flex gap={8} maxW='60vw' flexFlow='row wrap' alignItems='center' justifyContent='space-evenly'>
           {member.map(item => (
           <Text key={item}> {item} </Text>
        ))} 
      </Flex> 

        
    </Flex>
  )

    
}


export default AboutUs
