import { Box, Heading } from "@chakra-ui/react";

interface BannerContinentProps {
    imageBanner: string;
    title: string;
}

export const BannerContinent = ({ imageBanner, title }: BannerContinentProps) => {
    return (
        <Box
            w="100%"
            h={[200, 500]}
            backgroundImage={imageBanner}
            backgroundSize="cover" // TODO
            backgroundRepeat="no-repeat"
            backgroundPosition="bottom"
        >
            <Heading 
                color="gray.50"
                fontWeight="semibold"
                fontSize={48}
                maxW={[375, 1240]}
                mx="auto"
                marginTop={["70px", 379]}
                display={"flex"}
                justifyContent={["center", "normal"]}
            >{title}</Heading>
        </Box>
    );
}