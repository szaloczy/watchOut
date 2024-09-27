import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import {
  Box,
  Image,
  Input,
  Heading,
  Text,
  HStack,
  IconButton,
  useColorModeValue,
  useToast,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  VStack,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { useWatchStore } from "../store/watch";

const WatchCard = ({ watch }) => {
  const [updatedWatch, setUpdatedWatch] = useState(watch);
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");

  const toast = useToast();
  const { deleteWatch, updateWatch } = useWatchStore();
  const { isOpen, onOpen, onClose } = useDisclosure(); 

  const handleDeleteWatch = async (wid) => {
    const { success, msg } = await deleteWatch(wid);
    if (!success) {
      toast({
        title: "Error",
        description: msg,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: msg,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleUpdateWatch = async (wid, updatedWatch) => {
   const { success, msg } = await updateWatch(wid, updatedWatch);
    onClose();
    if(!success){
      toast({
        title: "Error",
        description: msg,
        status: "error",
        duration: 2000,
        isClosable: true,
      })
    } else {
      toast({
        title: "Success",
        description: "Watch updated successfully",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
  }

  return (
    <Box

      shadow={"lg"}
      rounded={"lg"}
      overflow={"hidden"}
      transition={"all 0.3s"}
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={bg}
    >
      <Image
        src={watch.image}
        alt={watch.name}
        h={40}
        w="full"
        objectFit="cover"
      ></Image>

      <Box p={4} >
        <Heading as="h3" size="md" mb={2}
        fontFamily={"serif"}
        >
          {watch.name}
        </Heading>

        <Text fontWeight={"bold"} fontSize={"xl"} color={textColor} mb={4}>
          ${watch.price}
        </Text>

        <HStack spacing={2}>
          <IconButton 
            icon={<EditIcon />} 
            onClick={onOpen }
            colorScheme="blue"></IconButton>
          <IconButton
            icon={<DeleteIcon />}
            onClick={() => handleDeleteWatch(watch._id)}
            colorScheme="red"
          ></IconButton>
        </HStack>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>

            <ModalContent>
                <ModalHeader>Update Watch </ModalHeader>
                <ModalCloseButton></ModalCloseButton>
                  <ModalBody>
                    <VStack spacing={4}>
                      <Input
                        placeHolder="watch name"
                        name="name"
                        value={updatedWatch.name}
                        onChange={(e) => setUpdatedWatch({...updatedWatch, name: e.target.value })}
                      >
                      </Input>
                      <Input
                        placeHolder="Price"
                        name="price"
                        type="number"
                        value={updatedWatch.price}
                        onChange={(e) => setUpdatedWatch({...updatedWatch, price: e.target.value})}
                      >
                      </Input>
                      <Input
                        placeHolder="Image"
                        name="image"
                        value={updatedWatch.image}
                        onChange={(e) => setUpdatedWatch({...updatedWatch, image: e.target.value})}
                      >
                      </Input>
                    </VStack>
                  </ModalBody>

                  <ModalFooter>
                    <Button 
                    colorScheme="blue" 
                    mr={3} 
                    onClick={() => handleUpdateWatch(watch._id, updatedWatch)}
                    >
                      Update
                    </Button>
                    <Button onClick={onClose}>
                      Cancel
                    </Button>
                  </ModalFooter>
            </ModalContent>

        </ModalOverlay>
      </Modal>

    </Box>
  );
};

export default WatchCard;
