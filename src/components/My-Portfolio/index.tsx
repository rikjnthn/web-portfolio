import React, {useRef} from "react";

import {
  Container,
  Heading,
  Link,
  Flex,
  Image,
  Button,
} from "@chakra-ui/react";

import Sea from "../../assets/sea.webp";

const Portfolio = () => {
  const ImageProps = ({
    path,
    img,
    alt,
  }: {
    path: string;
    img: string;
    alt: string;
  }) => (
    <Link href={path}>
      <Image src={img} alt={alt} />
    </Link>
  );

  const portfolioRef = useRef<HTMLDivElement>(null)

  const handleClick = () => portfolioRef.current?.scrollIntoView()

  return (
    <section className="opacity-animation">
      <Container as="section" maxWidth="full">
        <Flex
          as="section"
          flexDirection="column"
          height="calc(100vh - 6rem)"
          alignItems="center"
          justifyContent="center"
          gap='20'
          backgroundImage={Sea}
          backgroundClip="text"
        >
          <Heading
            as="h1"
            fontSize={{ base: "5xl", sm: "7xl", md: "9xl" }}
            letterSpacing="widest"
            fontWeight="black"
            fontFamily="sans-serif"
          >
            Portfolio
          </Heading>

          <Button onClick={handleClick} backgroundColor='cyan.900' color='white' _hover={{backgroundColor:'blue.600'}} _active={{backgroundColor: "blue.900"}}>See My Portfolio</Button>
        </Flex>

        <Container as="main" ref={portfolioRef}>
          <Container as="section" color='white'>
          </Container>
        </Container>
      </Container>
    </section>
  );
};

export default Portfolio;
