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
  RangeSliderThumb,
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

      <Box color="gra.600">
        <Flex justify="center" align="center">
          <Box width="10%">
            <Text fontSize="xs">1:21</Text>
          </Box>
          <Box width="80%">
            <RangeSlider
              // eslint-disable-next-line jsx-a11y/aria-proptypes
              aria-label={["min", "max"]}
              step={0.1}
              min={0}
              max={300}
              id="player-range"
            >
              <RangeSliderTrack bg="gray.800">
                <RangeSliderFilledTrack bg="gray.600" />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
            </RangeSlider>
          </Box>
          <Box width="10%" textAlign="right">
            <Text fontSize="xs">232</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Player;
