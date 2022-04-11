import React from 'react'
import IMG from '../../assets/image74.png'

const Left = () => {
  return (
    <div className='left-footer'>
   <div className='logo-footer'>
    <img src={IMG} className='footer-logo'></img>
        <div className='logo-text logo-text-footer'>OpenSea</div>
        </div>
       <div className='footer-para'>
           <p>From Opensea.io, go to your profile icon and click “Create” in the top right corner. You’ll be taken to the NFT item creation page. This page will allow you to upload your NFT file, name it and add a description.</p>
       </div>
    
    </div>
  )
}

export default Left