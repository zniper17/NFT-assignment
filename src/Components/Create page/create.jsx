import React from 'react'
import "./create.css"

const create = () => {
  return (
    <section id="create-page">
    <div className='create-container'>
      <div className='create-inside-box'>
      <div className='create-description'>
        <h2>Create & Sell Your NFT’s</h2>
        <p>A play of  light and shade, chairoscuro is the realm between the light and dark.</p>
      </div>
      <div className='create-box' >
      <div className='create-box-container'>
        <h3>Set up your wallet</h3>
        <p>Once you’ve set up your wallet of choice, connect it to OpenSea.Learn about the <span> wallets we support.</span></p>
</div>
  <div className='create-box-container'>
        <h3>Create  your  collection</h3>
      <p>Click <span>My Collections </span> and set up your collection. Add social links, a description, profile & banner images, and set a secondary. </p>
</div>
<div className='create-box-container'>
        <h3>Add  your  NFT’s</h3>
      <p>Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs stats, and unlockable content. </p>
</div>
<div className='create-box-container'>
        <h3>List  them  for  sale</h3>
      <p>Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs.</p>
</div>
      </div>
      </div>
    </div>
    </section>
  )
}

export default create