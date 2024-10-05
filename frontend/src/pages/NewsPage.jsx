import React from 'react';
import { Box, Image, Text, Grid, GridItem, Link } from '@chakra-ui/react';

const ArticleItem = ({ title, description, image, author, date, link }) => {
  return (
    <Grid templateColumns={{ base: "1fr", md: "2fr 3fr" }} gap={6} mb={10}>
      {/* Kép */}
      <GridItem>
        <Link href={link} isExternal>
          <Image src={image} alt={title} borderRadius="md" objectFit="cover" />
        </Link>
      </GridItem>

      {/* Szöveges tartalom */}
      <GridItem>
        <Link href={link} isExternal>
          <Text as="h3" fontSize="2xl" fontWeight="bold" mb={2}>
            {title}
          </Text>
        </Link>
        <Text fontSize="lg" mb={2}>
          {description}
        </Text>
        <Text fontSize="sm" color="gray.500">
          By {author} - {date}
        </Text>
      </GridItem>
    </Grid>
  );
};

const NewsPage = () => {
  return (
    <Box p={6}>
      {/* Cikkek listája */}
      <ArticleItem
        title="Hozzáférés egy Omega Speedmasterhez, Heuer Carrerahoz és egy CL Guinand zsebórához az Olimpiai Klub számára"
        description="Mindez és még egyebek is megtalálhatók a Hodinkee legújabb, 'Miért érdekli az embereket' rovatában."
        image="https://hodinkee.imgix.net/uploads/images/29c116e7-558e-42c1-b66f-36791bfe6add/BAL.Speedmaster.1.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&fit=crop&ch=Width%2CDPR%2CSave-Data&alt=&ar=16%3A9&w=814"
        author="Rich Fordon"
        date="October 04, 2024"
      />

      <ArticleItem
        title="Bemutatjuk az Omega 'Első Omega az Űrben' Speedmaster-t, amely új kék-szürke számlappal tér vissza"
        description="Kívülről egy évjáratú CK2998, belül pedig tiszta modern Omega technikával."
        image="https://hodinkee.imgix.net/uploads/images/3fe1fe7f-89ca-425a-ba2b-c72a7ead14dd/HeroOMEGA_310.30.40.50.06.001_FOIS_16_9.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&fit=crop&ch=Width%2CDPR%2CSave-Data&alt=&ar=16%3A9&w=814"
        author="Benjamin Clymer"
        date="October 04, 2024"
      />

      <ArticleItem
        title="Aukció: A Rolex GMT-Master, ami eljutott az űrbe, árverésre kerül"
        description="Edgar Mitchell asztronauta GMT-Master-je, amelyet az Apollo 14 küldetés során viselt, volt az első Rolex, ami a Holdon járt"
        image="https://hodinkee.imgix.net/uploads/images/5e81c128-8ab3-4714-9d94-4f1b17f6e08f/16x9forHSite2.png?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&fit=crop&ch=Width%2CDPR%2CSave-Data&alt=&ar=16%3A9&w=814"
        author="Anthony Traina"
        date="October 03, 2024"
      />
    </Box>
  );
};

export default NewsPage;
