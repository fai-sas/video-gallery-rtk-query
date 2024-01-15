/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

export default function Player({ link, title }) {
  return (
    <iframe
      width='100%'
      className='rounded-md aspect-video'
      src={link}
      title={title}
      frameBorder=''
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    ></iframe>
  )
}
