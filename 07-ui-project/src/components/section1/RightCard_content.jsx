import React from 'react'
import {ArrowRight} from 'lucide-react'

const RightCard_content = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full rounded-4xl p-6 flex flex-col justify-between'>
           <h2 className='h-10 w-10 font-bold bg-white rounded-full flex justify-center items-center'>{props.id+1}</h2>
           <div>
              <p className='text-sm font-semibold text-white leading-normal text-shadow-4xs mb-14'>{props.intro}</p>
           
                <div className="flex justify-between">
                  <button className='bg-blue-500 text-white font-medium py-2 px-4 rounded-full'>{props.tag}</button>
                  <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded-full'><ArrowRight /></button>
                </div>
            </div>
        </div>
     
  )
}

export default RightCard_content