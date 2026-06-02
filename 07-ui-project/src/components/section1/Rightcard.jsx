import React from 'react'
import {ArrowRight} from 'lucide-react'
import RightCard_content from './RightCard_content'

const Rightcard = (props) => {
  return (
    <div className='h-full w-70 relative flex shrink-0 bg-red-500 rounded-4xl '>
        <img src={props.img} alt="" className='h-full w-full object-cover rounded-4xl'/>
        <RightCard_content tag={props.tag} intro={props.intro} id={props.id} />
    </div>
  )
}

export default Rightcard
