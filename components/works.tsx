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
              <div>We built 
              <div>
                  
              </div>
            </div>
          </WorkLeft>
        </WorkContainter>

      )}></Tile>
      
      <Tile 
      page={1} 
      renderContent={({progress})=>(

        <WorkContainter>
          <WorkLeft progress={progress} >
              <div>We built 2</div>
          </WorkLeft>
        </WorkContainter>
     
      )}></Tile>

      <Tile 
      page={2} 
      renderContent={({progress})=>(

        <WorkContainter>
          <WorkLeft progress={progress} >
              <div>We built 3</div>
          </WorkLeft>
        </WorkContainter>
     

      
      )}></Tile>
    
    </TileContent>


</TileWrapper>

export default Works
