import React from "react";

import { Container, Flex, Text } from "@chakra-ui/react";

import './PageNotFound.css'

const PageNotFound = () => {

  const Error404Comp = ({value, delay=''}: {value: string, delay?: string}) => (
    <Container 
    as='span'
    className="bounce"
      fontSize='7xl'
      fontWeight='black'
      animation={`bouncing 500ms ease ${delay} infinite alternate `}
     >
      {value}
    </Container>
  )

  return (
    <>
      <Flex
        as="section"
        maxWidth="full"
        height="calc(100vh - 6rem)"
        justifyContent="center"
        alignItems="center" 
        flexDirection='column'
      >
        <Flex color='white' userSelect='none'>
          <Error404Comp value="4" />
          <Error404Comp value="0" delay='200ms' />
          <Error404Comp value="4" delay="300ms" />
        </Flex>
        <Text color='whiteAlpha.800' marginTop='20' maxWidth='50%' textAlign='center'>
          Page that you are looking for was not found.
        </Text>
      </Flex>
    </>
  );
};

export default PageNotFound;
