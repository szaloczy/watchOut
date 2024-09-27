import React, {useEffect} from "react";
import { Container, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useWatchStore } from "../store/watch";
import WatchCard from "../components/WatchCard.jsx";

const Watches = () => {

    const { fetchWatches, watches } = useWatchStore();
    useEffect(() => {
        fetchWatches();
    }, [fetchWatches]);
    console.log("watches", watches);
    
    return(
        <Container maxW="container.xl" py={12} fontFamily={"serif"}>
            <VStack spacing={8}>  
                <Text
                    
                    fontSize={"30"}
                    fontWeight={"bold"}
                    color={"blue.500"}
                    textAlign={"center"}    
                    
                >
                    List Of Watches
                </Text>

                <SimpleGrid
                    columns={{
                        base: 1,
                        md: 2,
                        lg: 3,
                    }}
                    spacing={10}
                    w={"full"}
                >
                    {watches.map((watch) => (
                        <WatchCard key={watch._id} watch={watch}></WatchCard>
                    ))}
                </SimpleGrid>

                {watches.length === 0 && (
                    <Text fontSize={"xl"} textAlign={"center"} fontWeight={"bold"} color="gray.500">
                    No watches found {" "}
                    <Link to={"/create"}>
                        <Text as="span" color="blue.500" _hover={{textDecoration: "underline"}}>
                            Create a watch
                        </Text>
                    </Link>
                </Text>
                )}

            </VStack>
        </Container>
        
    );
}

export default Watches;