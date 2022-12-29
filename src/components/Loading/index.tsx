import React from "react";

import { Container, Flex, Spinner } from "@chakra-ui/react";

import { cssSupport } from "../../helper/css-support";

const Loading = () => {
  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="center"
        backgroundColor="blackAlpha.900"
        height={
          cssSupport("height", "1dvh")
            ? "calc(100dvh - 6rem)"
            : "calc(100vh - 6rem)"
        }
      >
        <Container maxWidth="fit-content" display="flex">
          <Spinner
            width="5rem"
            height="5rem"
            thickness="5px"
            color="#3BE4C6"
            speed="1s"
            emptyColor="gray.200"
          />
        </Container>
      </Flex>
    </>
  );
};

export default Loading;
