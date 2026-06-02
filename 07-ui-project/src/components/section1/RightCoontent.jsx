import React from 'react'
import Rightcard from './Rightcard'

const RightCoontent = (props) => {
  return (
    <div id='right'
    className='h-full rounded-4xl w-2/3 p-6 flex flex-nowrap gap-6 overflow-x-auto bg-amber-200'>
        
            {props.users.map(function(elem,idx){

                return <Rightcard key={idx} id={idx} img={elem.img} tag={elem.tag} intro={elem.intro} />
            })}

       
    </div>
  )
}

export default RightCoontent