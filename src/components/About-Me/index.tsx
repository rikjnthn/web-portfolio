import React, { useRef } from "react";

import {
  Button,
  Container,
  Flex,
  Heading,
  Text,
  Icon,
  Link,
  Image,
} from "@chakra-ui/react";
import { BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { IconType } from "react-icons/lib";

import "./about.css";
import Greet from "../../assets/greet.png";

const About = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const IconProps = ({
    icon,
    value,
    href,
  }: {
    icon: IconType;
    value: string;
    href: string;
  }) => (
    <Flex
      className="icon-contact"
      maxWidth=""
      width="fit-content"
      alignItems="center"
    >
      <Icon as={icon} boxSize="5" />
      <Link paddingLeft="4" href={href}>
        {value}
      </Link>
    </Flex>
  );

  const handleClick = () => contactRef.current?.scrollIntoView();

  return (
    <main className="opacity-animation">
      <Flex
      as='section'
        maxWidth="full"
        height="calc(100vh - 6rem)"
        alignItems="center"
        color="white"
        flexWrap="wrap"
      >
        <Container as="section" width="300px">
          <Heading>
            Hi, I Am{" "}
            <Text as="span" display="block" color="blue.200">
              Web Developer
            </Text>
          </Heading>
          <Text marginY="12">Ready to build website for you</Text>
          <Button
            onClick={handleClick}
            backgroundColor="cyan.900"
            _hover={{ backgroundColor: "blue.600" }}
            _active={{ backgroundColor: "blue.900" }}
          >
            Contact Me
          </Button>
        </Container>
        <Container className="hero-image" height='fit-content' borderRadius='3xl' overflow='hidden'> 
          <Image
            src={Greet}
            alt="my-photo"
          />
        </Container>
      </Flex>
      <Container
        ref={contactRef}
        as="section"
        maxWidth="full"
        color="white"
        height="calc(100vh - 7rem)"
      >
        <Flex alignItems="center" height="76%" flexFlow="column">
          <Heading fontSize={{ base: "4xl", sm: "6xl" }}>Contact Me</Heading>
          <Flex
            flexWrap="wrap"
            gap="20"
            justifyContent="center"
            height="20"
            margin="auto"
          >
            <IconProps
              icon={BsWhatsapp}
              value="081385160823"
              href="https://wa.me/081385160823"
            />
            <IconProps
              icon={SiGmail}
              value="erikjonathan147@gmail.com"
              href="mailto:erikjonathan147@gmail.com"
            />
          </Flex>
        </Flex>
      </Container>
    </main>
  );
};

export default About;
