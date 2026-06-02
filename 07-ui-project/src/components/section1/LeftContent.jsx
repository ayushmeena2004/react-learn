import React from 'react'
import { ArrowUpRight } from 'lucide-react'


const LeftContent = () => {
  return (
    <div className='h-full w-1/3 flex-col justify-between'>
        <div>
            <h3 className='text-6xl font-bold py-10 px-5'>Prospective <br/>Customer <br/>Segmentation</h3>
            <p className='py-10 px-5 text-gray-500'> Customer segmentation is the process of dividing customers into different groups based on their behavior, interests, demographics, or purchasing patterns. It helps businesses understand their target audience better and create personalized marketing strategies to improve customer satisfaction and sales.
</p>
        </div>
        <div className='text-10xl py-7 px-2'>
            <i className='ri-arrow-right-up-line'><ArrowUpRight size={120} /></i>
        </div>

    </div>
  )
}

export default LeftContent