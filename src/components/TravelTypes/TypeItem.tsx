import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface TypeItemProps {
    text: string;
    image: string;
}

export const TypeItem = ({ text, image }: TypeItemProps) => {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });
    
    return (
        <Flex direction={["row", "column"]} align="center" justify="center">
            { isWideVersion ? ( <Image src={image} /> ) : ( <Image src="/images/Ellipse.svg" marginTop={25} /> ) }

            <Text fontWeight="semibold" fontSize={24} mt={5} marginLeft={5} >{text}</Text>
        </Flex>
    );
}