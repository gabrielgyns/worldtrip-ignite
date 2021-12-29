import { Text } from "@chakra-ui/react";

interface BioContinentProps {
    text: string;
}

export const BioContinent = ({ text }: BioContinentProps) => {
    return (
        <Text
            fontSize={[18, 24]}
            maxW={600}
            textAlign="justify"
            marginBottom={["16px", 0]}
        >
            {text}
        </Text>
    );
}