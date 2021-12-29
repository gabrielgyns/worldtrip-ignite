import { Flex, Image, SimpleGrid, Text, Tooltip } from "@chakra-ui/react"
import { Card } from "./Card"

interface CitiesContinentProps {
    cities: Array<{
        city: string;
        country: string;
        imageCountry: string;
        imageCover: string;
    }>;
}

export const CitiesContinent = ({ cities }: CitiesContinentProps) => {
    return (
        <Flex direction="column" >
            <Text marginBottom="40px" fontWeight="medium" fontSize={36} display="flex">
                Cidades +100
                <Tooltip label="Mais cidades e mais oportunidades">
                    <Image src="/images/Info.svg" display="inline-block" marginLeft={2} />
                </Tooltip>
            </Text>

            <SimpleGrid columns={[1, 4]} spacing={["20px", "45px"]} justify="center" align="center">
                { cities.map((place, index) => (
                    <Card
                        key={index + place.city + place.country}
                        city={place.city}
                        country={place.country}
                        imageCountry={place.imageCountry}
                        imageCover={place.imageCover}
                    />
                )) }
            </SimpleGrid>
        </Flex>
    )
}