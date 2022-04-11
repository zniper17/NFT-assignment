import React  from 'react'
import {AiOutlineArrowDown} from "react-icons/ai"
import { useState , useRef} from "react"
const Right = () => {
const [setActive,setActiveState]=useState("")
const [setHeight,setHeightState]=useState("0px")
const content=useRef(null)
function handleClick() {
    setActiveState(setActive=== "" ? "active" : "")
    setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`);
}
        
    const data=[{
        que:'How do I create an NFT?',
        ans:'From Opensea.io, go to your profile icon and click “Create” in the top right corner. You’ll be taken to the NFT item creation page. This page will allow you to upload your NFT file, name it and add a description.'
    },{
        que:'How do I create and sell NFTs on Polygon?',
        ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },{
        que:'What is Freezing Metadata',
        ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },{
        que:'Does Opensea allow physical item trades?',
        ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },{
        que:'How do I add a collection collaborator?',
        ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    }]
    return (
        <div className='right-faq-container'>
            {
                data.map(({que,ans},index) =>{
            
            return(
                <div className='accordian__section' key={index}>
            <button className={`accordion ${setActive}`} onClick={handleClick}>
                <p className='accordion_title'>{que}</p>
                <AiOutlineArrowDown  className='faqIcon'/>
            </button>
            <div ref={content} style={{maxHeight:`${setHeight}`}} className='accordion__content'>
                <div className='accordion_text'
                   dangerouslySetInnerHTML ={{ __html:ans}} />
                
            </div>
            </div>
            )
                })
            }
        </div>
      )
    }

export default Right