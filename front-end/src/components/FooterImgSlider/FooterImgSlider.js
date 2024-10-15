import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'

const images =[
    "https://www.bigbasket.com/media/uploads/banner_images/hp_m_babycare_250923_400.jpg?tr=w-1920,q=80",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_m_petstore_250923_400.jpg?tr=w-1920,q=80",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_bcd_250923_400.jpg?tr=w-1920,q=80",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_m_health_suppliment_250923_400.jpg?tr=w-1920,q=80",
    ""
]

const FooterImgSlider = () => {

    const[currIndex , setCurrIndex] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrIndex((prev)=>
                prev === images.length -1 ? 0 : prev +1
            );

        }, 3000)

        return ()=> clearInterval(interval)
    },[])

    const handleSlide =(i)=>{
        setCurrIndex(i)
    }
  return (
    <Box>
        {images.map((img , i)=>(
            
        ))}
    </Box>
  )
}

export default FooterImgSlider
