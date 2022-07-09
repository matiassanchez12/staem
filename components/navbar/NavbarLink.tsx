import React from "react";
import { Text, Link } from "@chakra-ui/react";

export interface NavbarLinkProps {
  /** Href to navigate when interected. Required */
  href: string;
  /** Visual text to display. Required */
  label: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = (props) => {
  const { href, label } = props;

  return (
    <Link href={href} target="_blank" _hover={{}} _focusVisible={{}}>
      <Text as="span" cursor="pointer" fontWeight={600}>
        {label}
      </Text>
    </Link>
  );
};

export default NavbarLink;
