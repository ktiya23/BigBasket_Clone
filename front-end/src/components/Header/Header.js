import React, { useEffect, useState } from "react";
import { Flex, Box } from "@chakra-ui/react";
import Logo from "./Logo";
import LocationSelector from "./LocationSelector";
import LoginSignup from "./LoginSignup";
import NavBar from "../NavBar/NavBar";
import ShopByCategory from "../NavBar/ShopByCategory";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      as="header"
      bg="white"
      p={4}
      width="100%"
      boxShadow={isScrolled?"md":"none"}
      position="relative"
    >
      <Flex
        justify="space-between"
        align="center"
        position="sticky"
        top="0"
        zIndex="10"
        p={4}
        boxShadow={isScrolled?"md":"none"}
        bg="white"
      >
        <Box>
          <Logo />
        </Box>

        <Box>
          <LocationSelector />
        </Box>

        <Box>
          <LoginSignup />
        </Box>
      </Flex>

      <br />
      <Flex display={isScrolled?"none":"block"} >
        <NavBar />
      </Flex>
    </Box>
  );
}

export default Header;
