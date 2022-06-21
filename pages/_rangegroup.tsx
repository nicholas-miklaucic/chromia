import { Flex, Stack } from "@chakra-ui/react";
import { useState } from "react";
import SliderPlus from "./_range";

export default function TripleSlider({
  values,
  lows,
  highs,
  steps,
  setValues,
  names,
  children,
}: {
  values: [number, number, number];
  lows: [number, number, number];
  highs: [number, number, number];
  steps: [number, number, number];
  setValues: (values: [number, number, number]) => void;
  names: [React.ReactNode, React.ReactNode, React.ReactNode];
  children?: React.ReactNode;
}) {
  return (
    <Stack p="2" borderRadius="lg">
      {children}
      {[0, 1, 2].map((i) => (
        <SliderPlus
          key={`${lows[i]} ${highs[i]} ${i}`}
          value={values[i]}
          low={lows[i]}
          high={highs[i]}
          step={steps[i]}
          name={names[i]}
          setValue={(val: number) => {
            setValues(
              values.map((el, ind) => (ind === i ? val : el)) as [
                number,
                number,
                number
              ]
            );
          }}
        ></SliderPlus>
      ))}
    </Stack>
  );
}
