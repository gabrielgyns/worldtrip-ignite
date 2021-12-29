import { Box, Flex, Heading, Link as LinkChakra, Text } from "@chakra-ui/react";
import Link from "next/link";
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([ Navigation, Pagination ]);

const itensSlide = [
    {
        continentRoute: 'europe',
        heading: 'Europa',
        text: 'O continente mais antigo.',
        image: '/images/Continent_Image.png'
    },
    {
        continentRoute: 'south-america',
        heading: 'América do Sul',
        text: 'Continente mais acolhedor.',
        image: 'https://images.unsplash.com/photo-1619546952812-520e98064a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80'
    },
    {
        continentRoute: 'north-america',
        heading: 'América do Norte',
        text: 'Viagem a nível de cinema.',
        image: 'https://images.unsplash.com/photo-1551042863-dbb4938b111f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80'
    },
    {
        continentRoute: 'asia',
        heading: 'Ásia',
        text: 'Culturas diferentes e sensacionais.',
        image: 'https://images.unsplash.com/photo-1549693578-d683be217e58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1777&q=80'
    },
    {
        continentRoute: 'africa',
        heading: 'África',
        text: 'Natureza e wild life.',
        image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80'
    },
    {
        continentRoute: 'oceania',
        heading: 'Oceania',
        text: 'Aventuras sem igual.',
        image: 'https://images.unsplash.com/photo-1600208669687-f19af3638cb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    },
];

export const SliderCore = () => {
    return (
        <Flex backgroundColor="gray.800" >
            <Swiper
                navigation
                pagination={{ clickable: true }}
                style={{ height: '450px' }}
            >
                { itensSlide.map((item, index) => (
                    
                        <SwiperSlide 
                            key={item.continentRoute + index}
                            style={{ 
                                backgroundImage: `url(${item.image})`, 
                                backgroundSize: 'cover',
                                backgroundPosition: 'center', 
                                textAlign: 'center', 
                                display: 'grid',
                                placeContent: 'center',
                                // opacity: 0.4,
                            }}
                        >
                            <LinkChakra
                                as={Link}
                                href={`/continent/${item.continentRoute}`}
                            >
                                <Box cursor="pointer">
                                    <Heading color="gray.50" _hover={{ color: 'gray.200' }} fontWeight="bold" fontSize={[24, 48]}>{item.heading}</Heading>
                                    <Text color="gray.50" _hover={{ color: 'gray.200' }}fontWeight="bold" fontSize={[12, 24]}>{item.text}</Text>
                                </Box>
                            </LinkChakra>
                        </SwiperSlide>
                )) }
            </Swiper>
        </Flex>
    );
}