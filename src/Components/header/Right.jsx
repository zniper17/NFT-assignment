import React from 'react'
import {BsFolderPlus} from 'react-icons/bs'
import {HiOutlineMenu} from 'react-icons/hi'

const Right = () => {
  return (
    <div className='right'>
        <div className='nav'>
        <div className='search'>
        
            <input type="text" className='searchTerm' placeholder='Search'></input>
            
            <button type="submit" className='searchButton'>
       
            </button>
        </div>
        <div className='double-icons'>
       
        <BsFolderPlus className='icon'/>
        <HiOutlineMenu className='icon' />

        </div>
        </div>
        <div className='image-right'></div>
        <div className='content-2'>
            <h3><a>SoulCurryArt</a></h3>
            <br></br>
            <p className='para'>A play of light and shade, chairoscurso is the <br></br> realm between the light and dark</p>
            <button className='btn'>Place Bid</button>
        </div>
                 
    </div>
  )
}

export default Right