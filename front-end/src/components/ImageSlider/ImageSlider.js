import { Box  , HStack, Image} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'

const images =[
    "https://www.bigbasket.com/media/uploads/banner_images/IBBN092113357-26109.jpg?tr=w-1920,q=80",
    "https://www.bigbasket.com/media/uploads/banner_images/IBBN092113357-26112.jpg?tr=w-1920,q=80",
    "https://www.bigbasket.com/media/uploads/banner_images/IBBN092113357-26108.jpg?tr=w-1920,q=80"
]

const ImageSlider = () => {

    const [currIndex , setCurrIndex] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrIndex((prev)=>
                prev === images.length -1 ? 0 : prev +1
            )
        },2000)

    return ()=> clearInterval(interval)
    },[])

    const handleSlide =(i)=>{
        setCurrIndex(i);
    }
  return (
    <Box>
        <Image src={images[currIndex]} boxSize="800px" objectFit="cover" transition="all 0.5s ease-in-out" />

        <HStack>
        {images.map((_, index) => (
          
        ))}
        </HStack>
    </Box>

  )
}

export default ImageSlider
