import React from "react";
import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { FaBars, FaWindowClose } from "react-icons/fa";
import Link from "next/link";

import NavbarLink, { NavbarLinkProps } from "./NavbarLink";
import NavbarButton from "./NavbarButton";

const NAVBAR_LINKS: NavbarLinkProps[] = [
  {
    href: "https://store.steampowered.com/about/",
    label: "Install",
  },
];

const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="nav" height={20} top={0} width="full" zIndex={"modal"}>
      <Container height="full" maxW="container.xl" paddingInline={16}>
        <Flex alignItems="center" height="full" justifyContent="space-between">
          <Link href="/">
            <Text as="span" cursor="pointer" color="primary.500" fontSize="3xl" fontWeight={700}>
              STAEM
            </Text>
          </Link>
          <Stack direction="row" display={{ base: "none", lg: "flex" }} fontSize="lg" fontWeight={700} spacing={12}>
            {NAVBAR_LINKS.map((link, index) => {
              return <NavbarButton key={index} href={link.href} label={link.label} />;
            })}
          </Stack>
          <Icon _hover={{ cursor: "pointer" }} as={FaBars} display={{ base: "flex", lg: "none" }} h={6} w={6} onClick={onOpen} />
        </Flex>
        <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
          <DrawerOverlay p={0} />
          <DrawerContent>
            <DrawerBody>
              <VStack mb={10} mt={4}>
                <Icon _hover={{ cursor: "pointer" }} as={FaWindowClose} h={6} position="absolute" right={4} w={6} onClick={onClose} />
                <Stack align="center" pt={10} spacing={10}>
                  {NAVBAR_LINKS.map((link, index) => (
                    <NavbarLink key={index} href={link.href} label={link.label} />
                  ))}
                </Stack>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Container>
    </Box>
  );
};

export default Navbar;
