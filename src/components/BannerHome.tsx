import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export const BannerHome = () => {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });

    return (
        <Box
            h={335}
            w="100%"
            backgroundImage="url(/images/Background.png)"
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
        >
            <Flex
                w="100%"
                maxW={[375, 1240]}
                mx="auto"
                marginTop={20}
                justifyContent="space-between"
            >
            <Flex direction="column">
                <Text fontSize={["3xl", 36]} fontWeight="medium" color="gray.50">5 Continentes, <br /> infinitas possibilidades.</Text>
                <Text fontSize={20} color="gray.50" paddingTop={5}>Chegou a hora de tirar do papel a viagem que você <br /> sempre sonhou.</Text>
            </Flex>

            { isWideVersion && ( <Image src="/images/Airplane.svg" /> ) }
            </Flex>
        </Box>
    )
}