import { Flex } from "@chakra-ui/react";
import { SliderCore } from "./SliderCore";

export const Slider = () => {
    return (
        <Flex direction="column" mx="auto" maxW={['100%', '100%', '100%', 1240]} h={[250, 450]} marginBottom={20} >
            <SliderCore />
        </Flex>
    );
}