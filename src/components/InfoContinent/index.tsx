import { Flex } from "@chakra-ui/react";
import { BioContinent } from "./BioContinent";
import { HighlightContinent } from "./HighlightContinent";

interface InfoContinent {
    bio: string;
    highlights: Array<{}>;
}

export const InfoContinent = ({ bio, highlights }) => {
    return (
        <Flex w="100%" direction={["column", "row"]} justifyContent="space-between" my={["24px", "80px"]} marginBottom={["32px", 0]}>
            <BioContinent text={bio} />

            <HighlightContinent highlights={highlights} />
        </Flex>
    );
}