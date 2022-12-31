import './App.css';
import { Card } from './Components/card/Card';
import { Header } from './Components/Header/Header';
import { cardConstants } from './constants/constant';
import {IoChevronForwardCircle,IoChevronBackCircle} from "react-icons/io5";
import { useState } from 'react';
import NavigationDots from './Components/card/NavigationDots';
import { TableList } from './Components/TableList/TableList';

function App() {
   const [activeIndex, setActiveIndex] = useState(0);
   const clickHandler=()=>
   {
    if(activeIndex === cardConstants.length) setActiveIndex(0);
    if(activeIndex !==cardConstants) setActiveIndex(activeIndex+1);
    if(activeIndex===2) setActiveIndex(0);
   }
  return (
    <div className="App flex-center flex-column">
     <Header/>
      <div className='allcards-container flex-center'>
       <IoChevronBackCircle className='backward-icon' onClick={clickHandler} />
          {/* <div className='flex-center gap visbility-div'> */}
            {cardConstants.map((card,index)=>{
              return(<Card card={card} key={card.id} index={index} activeIndex={activeIndex} />)
            })}
          {/* </div> */}
         <IoChevronForwardCircle className='forward-icon' onClick={clickHandler}/>
      </div>
       <NavigationDots activeIndex={activeIndex} />
       <TableList/>
    </div>
  );
}

export default App;
