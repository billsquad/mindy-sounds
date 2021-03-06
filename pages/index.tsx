import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

import GradientLayout from "../components/gradientLayout";
import { useMe } from "../lib/hooks";
import prisma from "../lib/prisma";

const Home = ({ artists }) => {
  const { user, isError } = useMe();

  if (isError) {
    return (
      <GradientLayout
        color="gray"
        subtitle="error"
        title="Error Page"
        description="An error occurred"
        image="https://images.pexels.com/photos/6367403/pexels-photo-6367403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        roundImage
      >
        <Box marginBottom="40px">
          <Text fontSize="4xl" fontWeight="bold">
            😿
          </Text>
        </Box>
      </GradientLayout>
    );
  }

  return (
    <GradientLayout
      color="pink"
      subtitle="profile"
      title={user?.username}
      description={`${user?.playlistsCount} public playlists`}
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
            <Box key={artist.name} px="10px" width="20%">
              <Box bg="gray.900" borderRadius="4px" p="15px" width="100%">
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
