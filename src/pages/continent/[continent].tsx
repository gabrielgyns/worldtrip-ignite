import { Flex } from "@chakra-ui/react";
import { GetServerSideProps, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { BannerContinent } from "../../components/BannerContinent";
import { CitiesContinent } from "../../components/CitiesContinent";
import { Header } from "../../components/Header";
import { InfoContinent } from "../../components/InfoContinent";
import api from "../services/api";

const continent = {
    title: 'Europa',
    imageBanner: '/images/banner_continent/europe.png',
    cities: [
        {
            city: 'Londres',
            country: 'Reino Unido',
            imageCover: '/images/cover_countries/londres.png',
            imageCountry: '/images/avatar_countries/reinounido.svg'
        },
        {
            city: 'Paris',
            country: 'França',
            imageCover: '/images/cover_countries/paris.png',
            imageCountry: '/images/avatar_countries/franca.svg'
        },
        {
            city: 'Roma',
            country: 'Itália',
            imageCover: '/images/cover_countries/roma.png',
            imageCountry: '/images/avatar_countries/italia.svg'
        },
        {
            city: 'Praga',
            country: 'República Tcheca',
            imageCover: '/images/cover_countries/praga.png',
            imageCountry: '/images/avatar_countries/republicatcheca.svg'
        },
        {
            city: 'Amsterdã',
            country: 'Holanda',
            imageCover: '/images/cover_countries/amsterda.png',
            imageCountry: '/images/avatar_countries/holanda.svg'
        },
    ],
    bio: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.',
    highlights: [
        {
            numberInfo: '50',
            text: 'países'
        },
        {
            numberInfo: '60',
            text: 'línguas'
        },
        {
            numberInfo: '27',
            text: 'cidades +100'
        },
    ]
};

interface ContinentPageProps {
    title: string;
    imageBanner: string;
    bio: string;
    cities: Array<{
        city: string;
        country: string;
        imageCover: string;
        imageCountry: string;
    }>;
    highlights: Array<{
        numberInfo: string;
        text: string;
    }>
}

export default function ContinentPage({ 
    title, 
    imageBanner, 
    cities, 
    bio, 
    highlights 
}: ContinentPageProps) {
    return (
        <Flex
            direction="column"
            height="100%"
            width="100%"
        >
            <Header />

            <BannerContinent title={title} imageBanner={imageBanner} />

            <Flex
                direction="column"
                width="100%"
                maxW={[375, 1240]}
                mx="auto"
                marginBottom={20}
            >
                <InfoContinent bio={bio} highlights={highlights} />

                <CitiesContinent cities={cities} />
            </Flex>
        </Flex>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { data } = await api.get(`/continents/${params.continent}`)

    return {
        props: data
    }
}