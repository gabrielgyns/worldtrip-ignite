import { Avatar, Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface CardProps {
    imageCover: string;
    imageCountry: string;
    city: string;
    country: string;
}

export const Card = ({ imageCover, imageCountry, country, city }: CardProps) => {
    return (
        <Box
            w={256}
            h={279}
            transition="transform 0.5s"
            _hover={{
                transform: 'scale(1.2)'
            }}
        >
            <Image src={imageCover} w="100%" h={173} borderTopRadius="10px" />
            <Flex p="24px" align="center" borderBottomRadius="10px" borderWidth={1} borderTopWidth={0} borderColor="yellow.900">
                <Flex direction="column" w="100%" >
                    <Text fontWeight="semibold" fontSize={20}>{city}</Text>
                    <Text fontWeight="medium" fontSize={16} color="gray.400">{country}</Text>
                </Flex>
                <Avatar src={imageCountry} w={30} h={30} />
            </Flex>
        </Box>
    );
}