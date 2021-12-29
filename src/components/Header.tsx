import { Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
    const { asPath } = useRouter();

    return (
        <Flex
            as="header"
            w="100%"
            maxW={1240}
            mx="auto"
            justifyContent="center"
            alignItems="center"
        >
            { asPath.includes('/continent') && (
                <Link href="/">
                    <Image src="/images/buttonBack.svg" pos="absolute" left={["16px", 140]} cursor="pointer" />
                </Link>
            ) }
            
            <Image src="/images/Logo.svg" py={27} />
        </Flex>
    );
}