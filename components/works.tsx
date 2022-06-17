import React from "react";
import { TileBackground, TileContent, TileWrapper , Tile } from "./tile";
import  {WorkContainter ,WorkBackground, WorkLeft } from "./work";


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
        </WorkContainter>
     

      
      )}></Tile>
    
    </TileContent>


</TileWrapper>

export default Works
