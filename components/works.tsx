import React from "react";
import { TileBackground, TileContent, TileWrapper , Tile } from "./tile";
import  {WorkContainter ,WorkBackground, WorkLeft, WorkRight } from "./work";
import Image from 'next/image'
import Kant from '../visual/kant'
const Works = () =><TileWrapper numOfPages={3}>
  
  <TileBackground>
    <WorkBackground/>
  </TileBackground>
    <TileContent>
      <Tile 
      page={0} 
      renderContent={({progress})=>(
        <WorkContainter>
          <WorkLeft progress={progress} >
              <h2 
                >
               ONE RULE FOR ALL
              <blockquote 
                className="w-full text-xl text-right">-Immanuel Kant</blockquote>
            </h2>
          </WorkLeft>
          <WorkRight progress={progress}>
            <Image 
              className="rounded-lg"
              src='/assets/kant.png'
              alt="kant-philosophy"
              layout="responsive"
              height={800}
              objectFit='contain'
              width={800}
                /> 
          </WorkRight>
        </WorkContainter>

      )}></Tile>
      
      <Tile 
      page={1} 
      renderContent={({progress})=>(

        <WorkContainter>
          <WorkLeft progress={progress} >
              <h2>
               THE MIND AS MYTH
              <blockquote 
                className="w-full text-xl text-right">-Eliminative materialism</blockquote>
            </h2>
          </WorkLeft>

          <WorkRight progress={progress}>
            <Image 
              className="rounded-lg"
              src='/assets/self.webp'
              alt="kant-philosophy"
              layout="responsive"
              height={1000}
              objectFit='contain'
              width={1000}
                /> 
          </WorkRight>
        </WorkContainter>
     
      )}></Tile>

      <Tile 
      page={2} 
      renderContent={({progress})=>(

        <WorkContainter>
          <WorkLeft progress={progress} >
              <h2>
               PRIVATE LANGUAGE IS IMPOSSIBLE
              <blockquote 
                className="w-full text-xl text-right">-Ludwig Wittgenstein</blockquote>
            </h2>
          </WorkLeft>
          <WorkRight progress={progress}>
            <Image 
              className="rounded-lg"
              src='/assets/ludwig.png'
              alt="kant-philosophy"
              layout="responsive"
              height={1000}
              objectFit='contain'
              width={1000}
                /> 
          </WorkRight>
        </WorkContainter>
     

      
      )}></Tile>
    
    </TileContent>


</TileWrapper>

export default Works
