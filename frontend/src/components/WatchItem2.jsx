import React from 'react';
import {
  Box,
  Heading,
  Text,
  Image,
  SimpleGrid,
  UnorderedList,
  ListItem,
  Divider,
  Flex,
  Badge,
  Button,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import automaticImg from '../assets/automatic.png';
import mechanikalImg from '../assets/mechanikal.png';
import solarImg from '../assets/solar.png';
import quartzImg from '../assets/quartz.png';

const WatchCollection = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  
  const watches = [
    {
      img: automaticImg,
      title: 'Autómatikus',
      feature: 'Kiemelkedő jellemző: ',
      featureHighlight: 'Automatikusan felhúzódik a kinetikus energia segítségével.',
      details: [
        'Az automata órák automatikusan tárolják az energiát a csukló mozgásának kihasználásával.',
        'Körülbelül +/- 20 másodperces pontosság naponta.',
        'Pénztárca barát.',
      ],
    },
    {
      img: mechanikalImg,
      title: 'Mechanikus',
      feature: 'Kiemelkedő jellemző: ',
      featureHighlight: 'Bonyolult, apró alkatrészek dolgoznak együtt.',
      details: [
        'Körülbelül +/- 20 másodperces pontosság naponta.',
        'Megbízható és egyszerűen lenyűgöző ránézés is.',
        'Magasabb ár.',
      ],
    },
    {
      img: solarImg,
      title: 'Napelemes',
      feature: 'Kiemelkedő jellemző: ',
      featureHighlight: 'Fényenergia átalakítása elektronikus energiává.',
      details: [
        'Kizárólag fényenergiával működtethető.',
        'Körülbelül +/- 15 másodperces pontosság havonta.',
        'Kvarc kristály alapú időmérés.',
      ],
    },
    {
      img: quartzImg,
      title: 'Quartz',
      feature: 'Kiemelkedő jellemző: ',
      featureHighlight: 'Nagyon pontosak és minimális karbantartást igényelnek.',
      details: [
        'Elektronikus áramköröket használ, melyeket kvarckristály szabályoz.',
        'Elemet igényel a működéshez, és elemcsere szükséges 2-3 évente.',
        'Körülbelül +/- 15 másodperces pontosság havonta.',
      ],
    },
  ];

  return (
    <Box id="mov" m={5} fontFamily={"serif"}>
      <Flex justify="space-between" align="center" mb={6}>
        <Heading fontFamily={"serif"} color={"brown"} as="h2" size="xl" textAlign="center">
          Órák mozgás szerint
        </Heading>
      </Flex>
      <Divider mb={6} />
      <SimpleGrid columns={[1, null, 2]} spacing={8}>
        {watches.map((watch, index) => (
          <Box
            key={index}
            borderWidth={1}
            borderRadius="lg"
            overflow="hidden"
            p={4}
            bg={"white"} 
            boxShadow="md"
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.02)' }}
            display="flex"
            alignItems="center"
          >
            <Image src={watch.img} alt={watch.title} borderRadius="md" boxSize="100px" />
            <Box ml={4} flex="1">
              <Heading as="h3" size="md" mb={2}>
                {watch.title}
              </Heading>
              <Text  fontSize="18px" color="red.800" mb={2}>
                {watch.feature}
                <Badge textTransform={"lowercase"} color={"red.800"} fontSize="16px">
                  {watch.featureHighlight}
                </Badge>
              </Text>
              <Box>
                <UnorderedList spacing={1} color={"black"} fontSize={"14px"}>
                  {watch.details.map((detail, i) => (
                    <ListItem key={i}>{detail}</ListItem>
                  ))}
                </UnorderedList>
              </Box>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default WatchCollection;
