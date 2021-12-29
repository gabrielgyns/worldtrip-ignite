import { Flex } from "@chakra-ui/react";
import { HighlightItem } from "./HighlightItem";

interface HighlightContinentProps {
    highlights: Array<Highlight>;
}

interface Highlight {
    numberInfo: string;
    text: string;
}

export const HighlightContinent = ({ highlights }: HighlightContinentProps) => {

    return (
        <Flex justifyContent="space-between" width="100%" maxW={490}>
            { highlights.map((item, index) => (
                <HighlightItem  key={index} highlightItem={item} />
            )) }
        </Flex>
    );
}