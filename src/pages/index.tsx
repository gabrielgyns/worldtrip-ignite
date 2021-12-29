import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { BannerHome } from "../components/BannerHome";
import { Header } from "../components/Header";

import { Slider } from "../components/Slider";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <Flex
      direction="column"
      h="100%"
      w="100%"
    >
      <Header />

      <BannerHome />

      <TravelTypes />

      <Divider w={90} borderBottomWidth={2} borderColor="gray.900" mx="auto" />

      <Box justify="center" my={["36px", "20"]}>
        <Text fontSize={36} fontWeight="medium" textAlign="center">Vamos nessa? <br /> Então escolha sue continente</Text>
      </Box>

      <Slider />
    </Flex>
  );
}
