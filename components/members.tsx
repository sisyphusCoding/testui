import React  from "react";

import {Container, Image , Text} from '@chakra-ui/react'

import styled from "@emotion/styled";

import Link from "next/link";

const Page = styled.div`
  color: white;
  cursor: pointer;
  height: 17rem;
  aspect-ratio: .8;
  border-radius: .5rem;
  display: gird;
  place-items: center;
  position: relative;
  transform: perspective(180rem) rotateY(0);
  transform-style: preserve-3d;
  transition: all 1200ms cubic-bezier(1,.85,.23,1.52);
  &:hover , &:focus {  
      transform: perspective(180rem) rotateY(180deg);
}
  > * {
    position: absolute;
}
`


const Front = styled.div`
  transform: translate3d(0,0,2rem);
  height: fit-content;
  with: fit-content;
  padding: 2rem; 
`

const Back = styled.div`
  transform: rotateY(180deg) translate3d(0,0,2rem);
  height: fit-content;
  with: fit-content;
  padding: 2rem; 
`

interface Props {
  name: string
  link:string 
  back:string
}


const Member : React.FC<Props> = ({name,link}) => {

  
    return (
        <></>        
    )


}




export default Member
