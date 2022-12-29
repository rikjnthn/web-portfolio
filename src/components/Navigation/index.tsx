import React, { useState } from "react";

import { NavLink, Outlet } from "react-router-dom";
import {
  Flex,
  Container,
  Heading,
  Link,
  useMediaQuery,
} from "@chakra-ui/react";

const Navigation = () => {
  const [isSmallerThan780] = useMediaQuery("(max-width: 780px)");

  const [clicked, setClicked] = useState(false);

  type LinkType = {
    path: string;
    value: string;
  };

  const LinkProps = ({ path, value }: LinkType) => {
    return (
      <Link
        as={NavLink}
        to={path}
        end
        width={`${isSmallerThan780 ? "fit-content" : "28"}`}
        height="10"
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="full"
        color="whiteAlpha.700"
        _activeLink={
          !isSmallerThan780
            ? {
                backgroundColor: "#3BE4C6",
                color: "black",
              }
            : {}
        }
      >
        {value}
      </Link>
    );
  };

  return (
    <>
      <Flex
        as="nav"
        height="24"
        alignItems="center"
        backgroundColor="customBlack"
        color="white"
        position="sticky"
        top="0"
        userSelect="none"
        zIndex="99"
      >
        <Container maxWidth="fit-content">
          <Heading>Erik Jonathan</Heading>
        </Container>

        <Container maxWidth="fit-content">
          {isSmallerThan780 && (
            <button
              onClick={() => setClicked(!clicked)}
              className={`hamburger ${clicked ? "open" : ""}`}
              title="hamburger icon"
              type="button"
            >
              <span />
              <span />
              <span />
            </button>
          )}
          <Flex
            as="section"
            display={`${isSmallerThan780 ? (clicked ? "" : "none") : "flex"}`}
            justifyContent="space-evenly"
            fontSize="sm"
            width={{ lg: "30rem" }}
            className={`${isSmallerThan780 ? "navbar" : ""}`}
          >
            <LinkProps path="/" value="My Portfolio" />
            <LinkProps path="about" value="About me" />
          </Flex>
        </Container>
      </Flex>
      <Outlet />
    </>
  );
};

export default Navigation;
