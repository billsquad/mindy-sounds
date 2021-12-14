import NextImage from "next/image";
import NextLink from "next/link";
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";

const Sidebar = () => {
  const navMenu = [
    {
      name: "Home",
      icon: MdHome,
      route: "/",
    },
    {
      name: "Home",
      icon: MdSearch,
      route: "/search",
    },
    {
      name: "Library",
      icon: MdLibraryMusic,
      route: "/library",
    },
  ];

  const musicMenu = [
    {
      name: "Create Playlist",
      icon: MdPlaylistAdd,
      route: "/",
    },
    {
      name: "Favorites",
      icon: MdFavorite,
      route: "/favorites",
    },
  ];

  const playlists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`);

  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      px="5px"
      color="gray"
    >
      <Box py="20px" height="100%">
        <Box width="120px" marginBottom="20px" px="20px">
          <NextImage src="/logo.svg" height={60} width={120} />
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {navMenu.map((menu) => (
              <ListItem px="20px" fontSize="16px" key={menu.name}>
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {menu.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box my="20px">
          <List spacing={2}>
            {musicMenu.map((menu) => (
              <ListItem px="20px" fontSize="16px" key={menu.name}>
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {menu.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider coor="gray.800" />
        <Box height="66%" overflowY="auto" py="20px">
          <List>
            {playlists.map((playlist) => (
              <ListItem px="20px" key={playlist}>
                <LinkBox>
                  <NextLink href="/" passHref>
                    <LinkOverlay>{playlist}</LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
