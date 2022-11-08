import React from "react";

import { Container, Flex, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <>
      <Flex alignItems="center" justifyContent="center" height="100vh" backgroundColor='blackAlpha.900'>
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
