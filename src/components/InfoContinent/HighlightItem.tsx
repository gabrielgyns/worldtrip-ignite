import { Flex, Text } from "@chakra-ui/react";

interface HighlightItemProps {
    highlightItem: {
        numberInfo: string;
        text: string;
    }
}

export const HighlightItem = ({ highlightItem: { numberInfo, text } }: HighlightItemProps) => {
    return (
        <Flex direction="column" justifyContent="center" align="center">
            <Text color="yellow.900" fontSize={[40, 48]} fontWeight="semibold">{numberInfo}</Text>
            <Text fontSize={[20, 24]} fontWeight="semibold">{text}</Text>
        </Flex>
    );
}