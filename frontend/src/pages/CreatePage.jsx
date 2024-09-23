import React, { useState } from 'react';
import {Button, Container, VStack, Box, Heading, Input, useColorModeValue} from "@chakra-ui/react";
import { useWatchStore } from '../store/watch';

const CreatePage = () => {

    const [newWatch, setNewWatch] = useState({
        name:"",
        price:"",
        image:"",
    });

    const { createWatch } = useWatchStore();
    const handleAddWatch = async () => {
       const { success, msg } = await createWatch(newWatch);
       console.log("Success: ", success);
       console.log("Message: ", msg);
    };

    return(
        <>
         <Container maxW={"container.sm"}>
            <VStack
                spacing={8}
            >   
                <Heading 
                 as={"h1"}
                 size={"2xl"} 
                 textAlign={"center"} 
                 mb={8}>
                    Create New Watch
                </Heading>

                <Box
                 w={"full"}
                 bg={useColorModeValue("white", "gray.800")} // Switches between white for light mode and gray.800 for dark mode
                 p={6}
                 rounded={"lg"}
                 shadow={"md"}
                >
                    <VStack spacing={4}>
                        <Input
                            placeholder="Watch name"
                            name="name"
                            value={newWatch.name}
                            onChange={(e) => setNewWatch({...newWatch, name: e.target.value})}
                        >
                        </Input>
                        <Input
                            placeholder="Price"
                            name="price"
                            type="number"
                            value={newWatch.price}
                            onChange={(e) => setNewWatch({...newWatch, price: e.target.value})}
                        >
                        </Input>
                        <Input
                            placeholder="Image URL"
                            name="image"
                            value={newWatch.image}
                            onChange={(e) => setNewWatch({...newWatch, image: e.target.value})}
                        >
                        </Input>

                        <Button colorScheme="blue" onClick={handleAddWatch} w="full">
                            Add Watch
                        </Button>
                    </VStack>

                </Box>
            </VStack>
         </Container>
        </>
    );
}

export default CreatePage;