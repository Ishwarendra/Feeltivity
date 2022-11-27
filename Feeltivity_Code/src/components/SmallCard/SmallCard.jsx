import React from 'react'

/*
* Pass Icon with all its properties like color height etc.
* bg Color and textColor should be hex-string with # before them 
* content and heading normal string
*/

// change TextColorClass to TextColor TODO
const SmallCard = ({muiIcon, heading, content, bgColorClass, textColorClass}) => {

  return (
    <div className={`grid grid-cols-1 place-items-center ${bgColorClass} ${textColorClass} rounded-xl p-6 h-[100%] shadow-sm`}>
        {/* Mui Icon */}
        {/* Heading */}
        {/* Content */}
        <div className='p-4 bg-white m-5 rounded-lg'>{muiIcon}</div>
        <div className='pt-4 font-semibold text-2xl'>{heading}</div>
        <div className='pt-4'>{content}</div>
    </div>
  )
}

export default SmallCard