import React from 'react'
import "./resources.css"


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import IMG1 from '../../assets/Rectangle1955.png'
import IMG2 from '../../assets/Rectangle1956.png'
import IMG3 from '../../assets/Rectangle1957.png'
const data=[{
  img:IMG1,
  descrpition:'10 tips for avoiding scams and staying safe.'
},{
  img:IMG2,
  descrpition:'Keeping yourself safe when buying Nft’s on Opensea.'
},{
  img:IMG3,
  descrpition:'The beginner’s guide to creating & selling digital art Nft’s'
},{
  img:IMG1,
  descrpition:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
},{
  img:IMG2,
  descrpition:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
}]


const Resources = () => {


  return (
    <section>
    <div className='container-resources'>
      <div className='resource-heading'>
        <h2>Resources  for  Getting  Started</h2>
        <p>A play of light and shade, chairoscuro is the <br></br>  realm between the light and dark.</p>
      </div>
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      
    >
  {
    data.map(item =>{
      return(
    
      
      <SwiperSlide className='swiper-box'>
        <img className='resourse-img' src={item.img}></img>
          <p className='resourse-para'>{item.descrpition}</p>
      </SwiperSlide>
     

      )
    })
  }
  </Swiper>
    ...
    </div>
    </section>
  )
}

export default Resources