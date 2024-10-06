import { Box, Heading, SimpleGrid, Image, Text, Stack, Badge, Grid, Center, Divider } from "@chakra-ui/react";
import { IoSwapHorizontal } from "react-icons/io5";

const watchData = [
  {
    brand: "Rolex",
    family: "Daytona",
    images: ["https://www.shutterstock.com/shutterstock/photos/2344892287/display_1500/stock-photo-miami-fl-usa-august-rolex-yellow-gold-oyster-daytona-cosmograph-showing-the-2344892287.jpg", "https://www.shutterstock.com/shutterstock/photos/2304496059/display_1500/stock-photo-miami-fl-usa-may-rolex-daytona-cosmograph-ref-showing-the-watch-2304496059.jpg", "https://www.shutterstock.com/shutterstock/photos/2278778945/display_1500/stock-photo-miami-fl-usa-march-rolex-two-tone-zenith-daytona-showing-the-dial-2278778945.jpg", "https://www.shutterstock.com/shutterstock/photos/2278777989/display_1500/stock-photo-miami-fl-usa-march-rolex-cosmograph-daytona-ref-showing-the-dial-2278777989.jpg"],
    picked: "https://media.rolex.com/image/upload/q_auto:eco/f_auto/c_limit,w_1600/v1711477797/rolexcom/collection/family-pages/professional-watches/cosmograph-daytona/landing/professional-watches-cosmograph-daytona-everose-gold_m126505-0002_2401jva_001_r",
    description: "Launched in 1963, the Cosmograph Daytona has long since transcended its status in the world of watchmaking to become an icon. Its name, inextricably linked to the famous racetrack, as well as its graphic face, have made it a legend. Yet it is at the heart of this exceptional chronograph that the true mechanics of the legend beat: a movement designed and produced entirely by the Rolex Manufacture that delivers superlative performance in all circumstances. Constantly improved and refined over time, the Cosmograph Daytona has proved to be as reliable as it is precise."
  },
  {
    brand: "Omega",
    family: "Speedmaster",
    images: ["https://www.shutterstock.com/shutterstock/photos/2270059341/display_1500/stock-photo-miami-fl-usa-march-omega-speedmaster-cal-space-watch-showing-the-dial-2270059341.jpg", "https://www.shutterstock.com/shutterstock/photos/2500260501/display_1500/stock-photo-milan-italy-july-close-up-on-a-classic-omega-speedmaster-moonwatch-luxury-timepiece-2500260501.jpg", "https://www.shutterstock.com/shutterstock/photos/2304655295/display_1500/stock-photo-milan-italy-may-close-up-shot-of-an-omega-speedmaster-moonwatch-luxury-wristwatch-no-2304655295.jpg", "https://www.shutterstock.com/shutterstock/photos/2306314663/display_1500/stock-photo-milan-italy-may-close-up-shot-of-an-omega-speedmaster-moonwatch-luxury-wristwatch-no-2306314663.jpg"],
    picked: "https://www.shutterstock.com/shutterstock/photos/2503744099/display_1500/stock-photo-munich-germany-july-an-omega-speedmaster-moonswatch-is-showcased-in-the-display-2503744099.jpg",
    description: "Discover the legendary Speedmaster collection, OMEGA's esteemed line of luxury, Swiss‑made watches. With a rich heritage in space exploration, the Speedmaster boasts unparalleled precision and style, with diverse models that each offer distinct features and designs. Unravel the captivating history behind these iconic timepieces and find your perfect Speedmaster watch – a famous mark of true horological excellence."
  },
  // Add more brands here
];

const BrandsPage = () => {
  return (
    <Box p={5}>
      {watchData.map((watch, index) => (
        <Box key={index} mb={10}>
          <Heading as="h2" size="lg" mb={4} textAlign={"center"} fontFamily={"serif"}>
            {watch.brand} - {watch.family}
          </Heading>

          <Divider mb={6} borderColor="gray.600" />

          <SimpleGrid columns={[1, 2, 4]} spacing={4} fontFamily={"serif"}>
            {watch.images.map((image, idx) => (
              <Box
                key={idx}
                overflow="hidden"
                transition="transform 0.3s ease"
                _hover={{ transform: "scale(1.1)" }} // Scaling effect
              >
                <Image 
                  src={image} 
                  alt={`${watch.family} watch ${idx + 1}`} 
                  objectFit="cover" 
                  borderRadius="md" 
                />
              </Box>
            ))}
          </SimpleGrid>
            <Badge mt={"20px"} fontSize={"25px"}>
              History
              
            </Badge>
            <Grid 
            templateColumns={["1fr", "1fr 1fr"]}
            gap={8}
            alignItems="center"
            >
      <Box>
        <Text fontSize={"20px"} lineHeight={"2.2rem"} textAlign={"justify"}>{watch.description}</Text>
      </Box>

      <Box
        overflow="hidden"
        alignItems={"center"}
        transition="transform 0.3s ease"
        _hover={{ transform: "scale(1.1)" }}
        >
          <Box>
        <Image 
          src={watch.picked}
          alt={`${watch.family} watch`}
          objectFit="cover"
          borderRadius="md"
          maxWidth={"100%"}
          boxSize={["150px", "400px"]}
        />
        </Box>
      </Box>
    </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default BrandsPage;
