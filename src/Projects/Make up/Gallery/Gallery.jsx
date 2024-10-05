import React, { useState } from 'react'
import './Gallery.css'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import Slides from './Images.js'
import { Captions, Fullscreen, Thumbnails, Zoom } from 'yet-another-react-lightbox/plugins'
import 'yet-another-react-lightbox/plugins/captions.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import Images from './Images.jsx'






const Gallery = () => {


    const [open,setOpen] = useState (false)
    const [index,setIndex] = useState(-1)

  


  return (
    <div id='gallery' className='gallery'> 
       
       <h1>Gallery</h1>
       
       <Images data = {Slides} onClick={(currentIndex)=>{setIndex(currentIndex)}}/>
        <Lightbox id='controls' plugins={[Fullscreen,Zoom]} captions={{
            showToggle:true,
            descriptionTextAlign:'end',
           
            
        }} 
        /*open = {open} */
        index={index}
        open ={index >  -1}
        close={()=>setIndex(-1)}
        slides={Slides}  
       />
    </div>
  )
}

export default Gallery
