"use client";

import {
  Text,
  Box,
  Flex,
  Link,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  HStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Routes } from "../../script";
import { Logo } from "./logo";
import { useCart, Money } from "@shopify/hydrogen-react";
import { IconShoppingCart, IconTrashXFilled } from "@tabler/icons-react";

export const BasicNav: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { lines, linesRemove, checkoutUrl } = useCart();

  return (
    <>
      <Box py={2} px={4} bg="gray.300" zIndex="1000">
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <HStack spacing={4}>
              <Link as={NextLink} href={Routes.HOME}>
                <Logo />
              </Link>
            </HStack>
          </Box>
          <Box pos="relative">
            <IconButton
              onClick={onOpen}
              aria-label="Shopping Cart"
              icon={<IconShoppingCart />}
            />
            {lines && lines.length > 0 && (
              <Box
                pos="absolute"
                color="white"
                fontSize="xs"
                top="-5px"
                right="-5px"
                bg="red.500"
                h="20px"
                w="20px"
                textAlign="center"
                lineHeight="20px"
                borderRadius="50%"
              >
                {lines.length}
              </Box>
            )}
          </Box>
        </Flex>
      </Box>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Cart & Checkout</DrawerHeader>

          <DrawerBody>
            {lines &&
              lines?.map((cartLine) => {
                const merch = cartLine?.merchandise;
                const product = merch?.product;

                return (
                  <Box key={cartLine?.id} mb={3}>
                    <Text fontSize="sm" fontWeight="bold">
                      {product?.title}
                    </Text>
                    <HStack>
                      {merch?.price && <Money data={merch.price} />}
                      <IconButton
                        size="sm"
                        ml="auto"
                        aria-label="Remove Item"
                        icon={<IconTrashXFilled />}
                        onClick={(e) => {
                          e.preventDefault();
                          if (cartLine?.id) {
                            linesRemove([cartLine?.id]);
                          }
                        }}
                      />
                    </HStack>
                  </Box>
                );
              })}
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" as={Link} href={checkoutUrl}>
              Checkout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
