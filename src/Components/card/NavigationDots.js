import React from 'react'
import {CgShapeCircle} from "react-icons/cg";
import {VscCircleFilled} from "react-icons/vsc";

const NavigationDots = ({activeIndex}) => {
  return (
    <div className='navigation-dots-container flex-center'>
      {activeIndex===0 ?<VscCircleFilled className='circle-icon'/>:<CgShapeCircle className='circle-icon'/>}
      {activeIndex===1 ?<VscCircleFilled className='circle-icon'/>:<CgShapeCircle className='circle-icon'/>}
      {activeIndex ===2?<VscCircleFilled className='circle-icon'/>:<CgShapeCircle className='circle-icon'/>}
      
    </div>
  )
}

export default NavigationDots
