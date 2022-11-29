import React from 'react'

const SpotifyCard = ({link, title}) => {
  return (
    <div className='brightness-90 hover:brightness-100'>
        <iframe
          className="rounded-lg"
          src={link}
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title={title}
        ></iframe>
        
    </div>
  )
}

export default SpotifyCard