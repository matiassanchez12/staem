import React from "react";
import { Flex, VStack } from "@chakra-ui/react";

import LayoutHead, { LayoutHeadProps } from "./LayoutHead";
import Navbar from "../navbar/Navbar";

interface LayoutProps {
  /* Optional head props for using in different pages */
  headProps?: LayoutHeadProps;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { headProps, children } = props;

  return (
    <>
      <VStack role="main" spacing={0}>
        {/* SEO Head */}
        <LayoutHead {...headProps} />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <Flex flexDir="column" width="full">
          {children}
          {/* Footer */}
        </Flex>
      </VStack>
    </>
  );
};

export default Layout;
