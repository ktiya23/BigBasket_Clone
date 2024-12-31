import React from 'react'
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";

const DailyStaples = () => {
    const posters = [
        {
          image:
            "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/0bb0a6da-8713-48fc-a40d-93cd63ca2025/hp_atta-flour-staplesStorefront_m_480_250323_01.jpg?tr=w-480,q-80",
        },
        {
          image:
            "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/0bb0a6da-8713-48fc-a40d-93cd63ca2025/hp_rice-staplesStorefront_m_480_250323_02.jpg?tr=w-480,q-80",
        },
        {
          image:
            "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/0bb0a6da-8713-48fc-a40d-93cd63ca2025/hp_dals-pulses-staplesStorefront_m_480_250323_03.jpg?tr=w-480,q-80",
        },
        {
          image:
            "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/0bb0a6da-8713-48fc-a40d-93cd63ca2025/hp_cooking-oils-staplesStorefront_m_480_250323_04.jpg?tr=w-480,q-80",
        },
        {
          image:
            "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/0bb0a6da-8713-48fc-a40d-93cd63ca2025/hp_dry-fruits-staplesStorefront_m_480_250323_05.jpg?tr=w-480,q-80",
        },
        {
          image:
            "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/0bb0a6da-8713-48fc-a40d-93cd63ca2025/hp_salt-staplesStorefront_m_480_250323_06.jpg?tr=w-480,q-80",
        },
      ];
  return (
    <div>
         <Text fontSize="x-large" fontWeight="bold">
           Your Daily Staples
         </Text>
         <Flex>
           {posters.map((poster, i) => (
               <Link>
               <Image src={poster.image} alt={`Poster ${i}`} _hover={{boxShadow: "0px 4px 8px rgba(96, 96, 96, 0.5)",transition: "0.3s"}} borderRadius="8px" height="100px" width="100px" />
               </Link>
             
           ))}
         </Flex>
       </div>
  )
}

export default DailyStaples
