import React from "react";
// import Link from "next/link";
import { Button, Text, Link } from "@chakra-ui/react";
import { BiDownload } from "react-icons/bi";

export interface NavbarButtonProps {
  /** Href to navigate when interected. Required */
  href: string;
  /** Visual text to display. Required */
  label: string;
}

const NavbarButton: React.FC<NavbarButtonProps> = (props) => {
  const { href, label } = props;

  return (
    <Link href={href} target="_blank" _hover={{}}>
      <Button
        leftIcon={<BiDownload size={18} />}
        iconSpacing={4}
        h={8}
        bg="#214B6B"
        _hover={{ bg: "#245072" }}
        paddingInline={6}
        fontSize="sm"
        borderRadius="full"
      >
        <Text as="span" cursor="pointer" fontWeight={600}>
          {label}
        </Text>
      </Button>
    </Link>
  );
};

export default NavbarButton;
