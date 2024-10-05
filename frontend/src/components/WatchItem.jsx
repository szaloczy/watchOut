import React from 'react';
import { useColorMode, Box, Text, Heading, Image, Center } from '@chakra-ui/react';
import analogFunc from '../assets/analogFunc.png';
import digitalFunc from '../assets/digitalfunc.png';
import chronographFunc from '../assets/chonographfunc.png';
import hybridFunc from '../assets/hybridfunc.png';

const WatchItem = ({ title, image, description, features }) => {
  const { colorMode } = useColorMode();
  
  return (
    <Box
      className="watch-item"
      p={5}
      shadow="md"
      borderWidth="1px"
      borderRadius="lg"
      bg={"white"}
      fontFamily={"serif"}
      transition="transform 0.2s ease-in-out"
      _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
    >
      <Image src={image} alt={title} boxSize="150px" objectFit="cover" margin={"auto"} mb={4}  background={"transparent"} />
      <Heading size="md" mb={2} color={"black"}>{title}</Heading>
      <Text  mb={2} color={"red.600"}>
        <strong>Kiemelkedő jellemző:</strong> {description}
      </Text>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>
            <Text color={"black"}>{feature}</Text>
          </li>
        ))}
      </ul>
    </Box>
  );
};

const WatchCollection = () => {
  return (
    <Box className="collection-container"  p={5}>
      <Heading as="h2" size="lg" color={"brown"} fontFamily={"serif"} mb={6} id="func">
        Órák funkcionalitás szerint
      </Heading>
      <hr/>
      <Box className="watch-grid" display="grid" mt={"25px"}  gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6} >
        <WatchItem
          title="Analóg"
          image={analogFunc}
          description="Az időmérők klasszikus és hagyományos oldalának megtestesítése"
          features={['Hagyományos óralap', 'Három mutató mozgás', 'Pénztárca barát']}
        />
        <WatchItem
          title="Digitális"
          image={digitalFunc}
          description="Elektronikus kijelző"
          features={['Számjegyekkel megjelenített idő', 'Teli extrákkal, mint például GPS, lépésszámláló és még sok más', 'Pénztárca barát']}
        />
        <WatchItem
          title="Kronográf"
          image={chronographFunc}
          description="Stoppereket, tachymetereket és még sok mást tartalmaz"
          features={['Kizárólag fényenergiával működtethető', 'Nem igényel elemcserét', 'Körülbelül +/- 15 másodperces pontosság havonta', 'Kvarc kristály alapú időmérés']}
        />
        <WatchItem
          title="Hibrid"
          image={hybridFunc}
          description="Digitális funkciókat ötvöz a hagyományos óraművekkel"
          features={['Analóg és digitális kombináció', 'Hasonló okosóra funkcionalitás', 'Pénztárca barát']}
        />
      </Box>
    </Box>
  );
};

export default WatchCollection;
