import React from 'react'
import LeftContent from './LeftContent'
import RightCoontent from './RightCoontent'

const Page1content = (props) => {
  return (
    <div className='flex items-center gap-10 pt-6 pb-20 px-16 h-[90vh] bg-amber-50'>
      <LeftContent />
      <RightCoontent users={props.users} />
    </div>
  )
}

export default Page1content