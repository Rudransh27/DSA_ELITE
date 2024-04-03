import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from 'react-responsive-carousel'
import img1 from '../Assets/striver.png'
import img2 from '../Assets/6pack.jpg'
function Resources() {
  return (
    <div className='resources'>
        <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={4000} showThumbs={false}>
            <div>
                <img src={img1} alt="" />
                <a href='' className='legend'>Striver's A2Z</a>
            </div>
            <div>
                <img src={img2} alt="" />
                <a href='' className='legend'> 6 Pack Programmer</a>
            </div>
        </Carousel>
    </div>
  )
}

export default Resources