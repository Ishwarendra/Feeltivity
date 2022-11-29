import React from 'react'

/*
* Pass Icon with all its properties like color height etc.
* bg Color and textColor should be hex-string with # before them 
* content and heading normal string
*/

// change TextColorClass to TextColor TODO
const SmallCard = ({muiIcon, heading, subheading = "", content, bgColorClass, textColorClass}) => {

  return (
    <div className={`grid grid-cols-1 place-items-center ${bgColorClass} ${textColorClass} rounded-xl p-6 h-[100%] shadow-sm font-sans`}>
        {/* Mui Icon */}
        {/* Heading */}
        {/* Content */}
        <div className='p-4 bg-white m-5 rounded-lg'>{muiIcon}</div>
        <div className='pt-4 font-bold text-2xl text-center'>{heading}</div>
        <div className='text-white font-semibold text-[1.3rem] text-center'>{subheading}</div>
        <div className='pt-4 text-lg font-medium'>{content}</div>
    </div>
  )
}

export default SmallCard