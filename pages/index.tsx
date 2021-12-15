import { Box, Flex, Text } from "@chakra-ui/layout";
import prisma from "../lib/prisma";

import GradientLayout from "../components/gradientLayout";
import { Image } from "@chakra-ui/react";

const Home = ({ artists }) => {
  return (
    <GradientLayout
      color="pink"
      subtitle="profile"
      title="Gary Moveout"
      description="0 public playlists"
      image="https://tinted-gym-f99.notion.site/image/https%3A%2F%2Fdl.dropboxusercontent.com%2Fs%2Fbgiv0ssz3xpotz9%2Fpeep.png%3Fdl%3D0?table=block&id=33f9771b-0e6f-4a72-832c-69ed2d41f290&spaceId=511cd811-5561-4a61-b550-c4086b4afafb&width=2000&userId=&cache=v2"
      roundImage
    >
      <Box color="white" px="40px">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Top artists this month
          </Text>
          <Text fontSize="sm">Only visible to you</Text>
        </Box>
        <Flex>
          {artists.map((artist) => (
            <Box px="10px" width="20%">
              <Box
                key={artist.name}
                bg="gray.900"
                borderRadius="4px"
                p="15px"
                width="100%"
              >
                <Image
                  src={artist.avatarUrl}
                  alt="artist avatar"
                  borderRadius="100%"
                  w="120px"
                  h="120px"
                  objectFit="cover"
                />
                <Box marginTop="20px">
                  <Text fontSize="lg">{artist.name}</Text>
                  <Text fontSize="x-small">Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  );
};

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});

  return {
    props: { artists },
  };
};

export default Home;
