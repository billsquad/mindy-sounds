import { useEffect, useRef, useState } from "react";
import {
  MdShuffle,
  MdSkipNext,
  MdOutlinePlayCircleFilled,
  MdOutlinePauseCircleFilled,
  MdOutlineRepeat,
  MdSkipPrevious,
} from "react-icons/md";
import {
  ButtonGroup,
  Box,
  IconButton,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderTrack,
  Center,
  Flex,
  Text,
} from "@chakra-ui/react";
import ReactHowler from "react-howler";
import { useStoreActions } from "easy-peasy";

const Player = () => {
  return (
    <Box>
      <Box>{/* <ReactHowler /> */}</Box>
      <Center color="gray.600">
        <ButtonGroup>
          <IconButton
            outilne="none"
            variant="link"
            aria-label="shuffle"
            fontSize="24px"
            icon={<MdShuffle />}
          />
          <IconButton
            outilne="none"
            variant="link"
            aria-label="previous"
            fontSize="24px"
            icon={<MdSkipPrevious />}
          />
          <IconButton
            outilne="none"
            variant="link"
            aria-label="play"
            fontSize="40px"
            color="white"
            icon={<MdOutlinePlayCircleFilled />}
          />
          <IconButton
            outilne="none"
            variant="link"
            aria-label="pause"
            fontSize="40px"
            color="white"
            icon={<MdOutlinePauseCircleFilled />}
          />
          <IconButton
            outilne="none"
            variant="link"
            aria-label="next"
            fontSize="24px"
            icon={<MdSkipNext />}
          />
          <IconButton
            outilne="none"
            variant="link"
            aria-label="repeat"
            fontSize="24px"
            icon={<MdOutlineRepeat />}
          />
        </ButtonGroup>
      </Center>
    </Box>
  );
};

export default Player;
