import { DeleteIcon, EditIcon,  } from "@chakra-ui/icons";
import { Box, Image, Heading, Text, HStack, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";

const WatchCard = ({watch}) => {
    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.800");

    return(
        <Box
        shadow={"lg"}
        rounded={"lg"}
        overflow={"hidden"}
        transition={"all 0.3s"}
        _hover={{ transform:"translateY(-5px)", shadow:"xl"}}
        bg={bg}
        >
            <Image src={watch.image} alt={watch.name} h={40} w="full" objectFit="cover"></Image>

            <Box p={4}>
                <Heading as="h3" size="md" mb={2}>
                    {watch.name}
                </Heading>

                <Text fontWeight={"bold"} fontSize={"xl"} color={textColor} mb={4}>
                    ${watch.price}
                </Text>

                <HStack spacing={2}>
                    <IconButton icon={<EditIcon/>} colorScheme="blue"></IconButton>
                    <IconButton icon={<DeleteIcon/>} colorScheme="red"></IconButton>
                </HStack>

            </Box>

        </Box>
    );
}

export default WatchCard