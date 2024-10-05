import React from 'react';
import {
  Box,
  Image,
  Heading,
  Text,
  Stack,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

// Vélemények adatai
const reviews = [
  { text: 'Nagyszerű termék, nagyon elégedett vagyok!', rating: 5 },
  { text: 'Kiváló minőség, ajánlom!', rating: 4 },
  { text: 'Jó, de van hova fejlődni.', rating: 3 },
];

const renderStars = (rating) => {
  return Array.from({ length: 5 }, (_, index) => (
    <Icon
      key={index}
      as={StarIcon}
      color={index < rating ? 'gold' : 'lightgray'}
      boxSize={5}
    />
  ));
};

const BlogPage = () => {
  return (
    <Box p={6} textAlign={"center"}>
      <Heading as="h1" size="xl" mb={4}>
        Új Omega 'Első Omega az Űrben' Speedmaster
      </Heading>
      <Image
        src="https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D"
        alt="Pessana"
        boxSize="50%"
        objectFit="cover"
        borderRadius="md"
        height={"350px"}
        margin={"auto"}
        mb={4}
      />
      <Text fontSize="lg" mb={4}>
        Az Omega 'Első Omega az Űrben' Speedmaster új kék-szürke számlappal tér vissza.
      </Text>
      <Text mb={4}>
        Ez a nagyszerű óra új technológiákkal rendelkezik, és megtestesíti a
        klasszikus eleganciát.
      </Text>
      <Stack spacing={4}>
        {reviews.map((review, index) => (
          <Box key={index} mb={3} borderWidth="1px" borderRadius="md" p={2}>
            <Text fontWeight="bold">{review.text}</Text>
            <HStack spacing={1}>
              {renderStars(review.rating)}
            </HStack>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default BlogPage;
