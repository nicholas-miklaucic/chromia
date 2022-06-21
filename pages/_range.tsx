import {
  Box,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { clamp_and_round } from "./_utils";

const SliderPlus = ({
  value,
  low,
  high,
  step,
  setValue,
  name,
}: {
  value: number;
  low: number;
  high: number;
  step: number;
  setValue: (value: number) => void;
  name: React.ReactNode;
}) => {
  return (
    <InputGroup size="sm">
      <InputLeftAddon
        borderColor="text"
        borderLeftRadius="lg"
        bgColor="transparent"
        p="0"
      >
        {name}
      </InputLeftAddon>
      <Input
        type="number"
        maxW="10ch"
        minW="7ch"
        px="1ch"
        mr="1rem"
        step={step}
        value={clamp_and_round(value, low, high, step)}
        onChange={(evt) => setValue(parseFloat(evt.target.value))}
        borderColor="text"
        borderRightRadius="lg"
        onClick={(evt) => (evt.target as HTMLInputElement).select()}
        textAlign="right"
      ></Input>
      <Flex justify="space-between" minW="300px">
        <Flex
          flexGrow={0}
          lineHeight="100%"
          justifyContent="center"
          alignContent="center"
          flexDirection="column"
        >
          {low}
        </Flex>
        <Slider
          flex="1"
          focusThumbOnChange={false}
          value={clamp_and_round(value, low, high, step)}
          onChange={setValue}
          orientation="horizontal"
          min={low}
          max={high}
          step={step}
          minW="100px"
          size="sm"
          mx="1.25rem"
        >
          <SliderTrack bgColor="text">
            <SliderFilledTrack bgColor="text" />
          </SliderTrack>
          <SliderThumb boxSize="1.25rem" bgColor="text"></SliderThumb>
        </Slider>
        <Flex
          flexGrow={0}
          lineHeight="100%"
          justifyContent="center"
          alignContent="center"
          flexDirection="column"
        >
          {high}
        </Flex>
      </Flex>
    </InputGroup>
  );
};

export default SliderPlus;
