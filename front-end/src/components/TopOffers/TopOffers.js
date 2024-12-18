import React from "react";
import { Box, Image, Grid, Heading } from "@chakra-ui/react";

const TopOffers = () => {
  const offers = [
    {
      id: 1,
      image:
        "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/2b94a9cf-895f-460d-849a-1eee860c974c/hp_dow-topoffersStorefront_m_480_250723_01.jpg?tr=w-1920,q=80",
    },
    {
      id: 2,
      image:
        "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/2b94a9cf-895f-460d-849a-1eee860c974c/hp_big-packs-topoffersStorefront_m_480_250723_02.jpg?tr=w-1920,q=80",
    },
    {
      id: 3,
      image:
        "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/2b94a9cf-895f-460d-849a-1eee860c974c/hp_combos-topoffersStorefront_m_480_250723_03.jpg?tr=w-1920,q=80",
    },
    {
      id: 4,
      image:
        "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/2b94a9cf-895f-460d-849a-1eee860c974c/hp_30-corner-topoffersStorefront_m_480_250723_04.jpg?tr=w-1920,q=80",
    },
  ];

  return (
    <Box p={8} textAlign="center">
      {/* Heading */}
      <Heading as="h2" size="lg" mb={6}>
        Top Offers
      </Heading>

      {/* Cards Grid */}
      <Grid templateColumns="repeat(4, 1fr)" gap={6} mb={4}>
        {offers.map((offer) => (
          //   <Box
          //     key={offer.id}
          //     borderWidth="1px"
          //     borderRadius="lg"

          //   >
          <Image
            src={offer.image}
            alt={`Offer ${offer.id}`}
            height="200px"
            width="450px"
            _hover={{
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              transition: "0.3s",
            }}
          />
          //   </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default TopOffers;
