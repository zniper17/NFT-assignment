import React from 'react'
import IMG from '../../assets/image73.png'
import IMG1 from '../../assets/NFT.png'

const Left = () => {
  return (
    <div className='left'>
      <div className='logo'>
        <img className='logo-img' src={IMG}></img>
        <div className='logo-text'>OpenSea</div>
        </div>
        <div className='caption'>
          <h1>Discover. <br></br>
          Collect. & Sell. Extraordinary </h1>
        
      </div>
      <img className='nft' src={IMG1} alt="NFT"></img>
      <div className='content1'>
      <p>On the world's first & largest NFT <br></br>
      marketplace.</p>
      </div>
      <div className='btn-left'>
        <button className='btn'>
          Explore
        </button>
        <button className='btn btn-2'>
          Create
        </button>
      </div>
      <a href='#'>Get Featured On The Homepage</a>

    </div>
  )
}

export default Left