import React from "react";
import {Button, Container, Flex, HStack, Text, useColorMode, Menu, MenuItem, MenuList} from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {

const { colorMode, toggleColorMode } = useColorMode();

    return(
      <>    
        <Container maxW={"1140px"} px={4} fontFamily={"serif"}>
          <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDir={{
            base:"Column",
            sm:"row"
          }}
          >

            <Text 
              fontSize={{base: "22", sm: "28"}}
              fontWeight={"bold"}
              textAlign={"center"}
              bgGradient={"linear(to-r, red.500, gray.500)"}
              bgClip={"text"}
            >
              <Link to={"/"}>WatchOut </Link>
            </Text>

            <Container
              display={"flex"}
              gap={10}
            >
              <Link to={"/"}>
                  <Text
                     fontSize={{base: "13", sm: "15"}}
                     fontWeight={"bold"}
                     textTransform={"uppercase"}
                     textAlign={"center"}
                     bgGradient={"linear(to-r, red.500, gray.500)"}
                     bgClip={"text"}
                  >Kezdőlap</Text>
              </Link>
              <Link to={"/news"}>
                  <Text
                  fontSize={{base: "13", sm: "15"}}
                  fontWeight={"bold"}
                  textTransform={"uppercase"}
                  textAlign={"center"}
                  bgGradient={"linear(to-r, red.500, gray.500)"}
                  bgClip={"text"}
                  >Újdonságok</Text>
                </Link>
              <Link to={"/watches"}>
                  <Text
                  fontSize={{base: "13", sm: "15"}}
                  fontWeight={"bold"}
                  textTransform={"uppercase"}
                  textAlign={"center"}
                  bgGradient={"linear(to-r, red.500, gray.500)"}
                  bgClip={"text"}
                  >Órák</Text>
              </Link>
              <Link to={"/blog"}>
                  <Text
                  fontSize={{base: "13", sm: "15"}}
                  fontWeight={"bold"}
                  textTransform={"uppercase"}
                  textAlign={"center"}
                  bgGradient={"linear(to-r, red.500, gray.500)"}
                  bgClip={"text"}
                  >Blog</Text>
              </Link>
            </Container>
            
            <HStack spacing={2} alignItems={"center"}>
              <Link to={"/create"}>
              <Button>
                <PlusSquareIcon fontSize={20}></PlusSquareIcon>
              </Button>
              </Link>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <IoMoon /> : <LuSun size='20' />}
              </Button>
            </HStack>
          </Flex>
        </Container>
      </>  
    )
}

export default Navbar;