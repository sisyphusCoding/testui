import React,{FC , createContext, ReactNode, useRef, useContext} from "react";
import { ScrollContext } from "../utils/scroll-observer";


interface WrapperProps {
  numOfPages: number
  children:ReactNode
}

  interface TileContextValue {
  numOfPages : number 
  currentPage:number
}

interface Props {
  children:ReactNode
}

export const TileContext = createContext<TileContextValue>({
    numOfPages:0,
  currentPage:0
})

export const TileWrapper:FC<WrapperProps>=({children,numOfPages})=>

{
  const{scrollY} = useContext(ScrollContext)
  const refContainer = useRef<HTMLDivElement>(null)

  let currentPage =0 

  const {current:elContainer} = refContainer
  if(elContainer){
    const {clientHeight,offsetTop} = elContainer
    const screenH = window.innerHeight
    const halfH = screenH / 2
    const percentY = Math.min(
          clientHeight+halfH,
          Math.max(-screenH,scrollY-offsetTop)+halfH) / clientHeight
    currentPage = percentY * numOfPages 
  }


  return(
    <TileContext.Provider
      value={{numOfPages,currentPage}}>    
      <section 
          ref={refContainer}
          className="relative bg-black text-white min-h-screen min-w-full"
          style={{height:numOfPages*100+'vh'}}
        >
        {children}           
      </section> 
    </TileContext.Provider>
  )}


export const TileBackground:FC<Props> = ({children}) => (
    <div className="absolute h-full w-full">{children}</div>
)

export const TileContent:FC<Props> = ({children}) =>(
  <div className="sticky top-0 h-screen overflow-hidden">{children}</div>
) 

interface CProps {
  page:number
  renderContent:(props:{progress:number}) => any
}

export const Tile:FC<CProps> = ({page,renderContent}) => {


  const { currentPage , numOfPages} = useContext(TileContext)
  const refContainer = useRef<HTMLDivElement>(null)
  
  const progress = Math.max(0,currentPage - page)


  let opacity = Math.min(1,Math.max(0,progress*4))

  if(progress>.85 && page < numOfPages -1){
      opacity = Math.max(0,(1-progress)*4)
  }

  return (
    <div 
      style={{
        pointerEvents: progress >=0 || progress >=1 ? 'none':undefined,opacity
      }}
      ref={refContainer}
      className="absolute top-0 w-full">
        {renderContent({progress})}
    </div>
  )


}


