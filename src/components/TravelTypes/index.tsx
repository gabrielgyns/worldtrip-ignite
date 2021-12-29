import { Stack, useBreakpointValue } from "@chakra-ui/react";
import { TypeItem } from "./TypeItem";

export const TravelTypes = () => {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });
    
    return (
        <Stack
            spacing={["20px", 150]}
            direction={["column", "row"]}
            w="100%"
            maxW={[375, 1240]}
            mx="auto"
            my={["36px", "20"]}
            justifyContent="center"
        >
            <TypeItem text="vida noturna" image="/images/cocktail.svg" />

            <TypeItem text="praia" image="/images/surf.svg" />

            <TypeItem text="moderno" image="/images/building.svg" />

            <TypeItem text="clássico" image="/images/museum.svg" />

            <TypeItem text="e mais..." image="/images/earth.svg" />
        </Stack>
    );
}