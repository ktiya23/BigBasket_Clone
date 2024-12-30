import React, { useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button, HStack, Box, Popover, PopoverTrigger, PopoverContent, PopoverBody, VStack } from "@chakra-ui/react";

const categories = [
  "Apparel",
  "Electronics",
  "Clothing",
  "Home & Kitchen",
  "Beauty & Health",
  "Books",
  "Sports",
  "Toys",
  "Automotive",
];

const primaryCategories = [
  "Exotic Fruit and Veggies",
  "Tea",
  "Ghee",
  "Nandini",
  "Fresh Vegetables",
];

const additionalCategories = [
  "Milk",
  "Yoghurt",
  "Chocolate",
  "Cup Noodles",
  "Hair Care",
  "Fresh Chicken",
  "Eggs",
  "Honey",
];

const ShopByCategory = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <HStack spacing="20px" justify="space-evenly" width="100%" position="sticky">
      <Menu>
        <MenuButton
          as={Button}
          bg="green.500"
          color="white"
          p="10px"
          _hover={{ bg: "green.600" }}
        >
          Shop By Category
        </MenuButton>
        <MenuList>
          {categories.map((category) => (
            <MenuItem key={category}>{category}</MenuItem>
          ))}
        </MenuList>
      </Menu>

      {primaryCategories.map((category, index) => (
        <Button
          key={category}
          variant="link"
          color="black"
          _hover={{ color: "red.600" }}
        >
          {category}
        </Button>
      ))}

      <Popover isOpen={showMore} onClose={handleShowMore} placement="bottom-start">
        <PopoverTrigger>
          <Button
            onClick={handleShowMore}
            variant="link"
            color="black"
            fontWeight="light"
            _hover={{ color: "red.600" }}
          >
            {showMore ? "<<" : ">>"}
          </Button>
        </PopoverTrigger>

        <PopoverContent>
          <PopoverBody>
            <VStack align="start" spacing="10px">
              {additionalCategories.map((category) => (
                <Button
                  key={category}
                  variant="link"
                  color="black"
                  fontWeight="light"
                  _hover={{ color: "red.600" }}
                >
                  {category}
                </Button>
              ))}
            </VStack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </HStack>
  );
};

export default ShopByCategory;
