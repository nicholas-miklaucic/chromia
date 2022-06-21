import { Box, Container, SimpleGrid, useColorMode } from "@chakra-ui/react";
import { hexToHsluv, hsluvToHex, hsluvToRgb, rgbToHsluv } from "hsluv";
import type { NextPage } from "next";
import { useState } from "react";
import { hsluvToRgb256, isDark, rgb256ToHsluv, rgbToHex } from "./_colors";
import TripleSlider from "./_rangegroup";
import { TextInput } from "./_text";
import { InfoLabel } from "./_utils";

const Home: NextPage = () => {
  let [hsl, setHsl] = useState([350, 80, 80] as [number, number, number]);
  let [rgbHex, setRgbHex] = useState(hsluvToHex(hsl));
  const { colorMode, toggleColorMode } = useColorMode();

  function setColor(newHsl: [number, number, number]) {
    setHsl(newHsl);
    setRgbHex(hsluvToHex(newHsl));
  }

  function setLight() {
    if (colorMode === "dark") {
      toggleColorMode();
    }
  }

  function setDark() {
    if (colorMode === "light") {
      toggleColorMode();
    }
  }

  function setColorMode() {
    if (hsl[2] <= 50) {
      setDark();
    } else {
      setLight();
    }
  }

  if (typeof window !== "undefined") {
    setColorMode();
  }

  const hexValidPattern = /^#?#?(?<hex>[0-9A-Fa-f]{6})$/;
  const hexPartialPattern = /^#?#?[0-9A-Fa-f]*$/;

  return (
    <Box p="2em" bgColor={hsluvToHex(hsl)} width="100vw" height="100vh">
      <SimpleGrid minChildWidth="400px" spacing="4rem">
        <TextInput
          value={rgbHex}
          setValue={setRgbHex}
          submit={(hex) => {
            setColor(hexToHsluv("#" + hex));
            setColorMode();
          }}
          validPattern={hexValidPattern}
          partialPattern={hexPartialPattern}
        >
          <InfoLabel
            name="Hex"
            info="Hexadecimal version of RGB."
            inner={{
              fontWeight: "bold",
              fontSize: "2xl",
            }}
          />
        </TextInput>
        <TripleSlider
          values={hsluvToRgb256(hsl)}
          lows={[0, 0, 0]}
          highs={[255, 255, 255]}
          steps={[0.1, 0.1, 0.1]}
          names={[
            <InfoLabel name="R" info="Red" />,
            <InfoLabel name="G" info="Green" />,
            <InfoLabel name="B" info="Blue" />,
          ]}
          setValues={(val) => {
            setColor(rgb256ToHsluv(val));
            setColorMode();
          }}
        >
          <InfoLabel
            name="RGB"
            info="The standard RGB format you're probably familiar with, and how computer displays understand color."
            inner={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "2xl",
            }}
          />
        </TripleSlider>
        <TripleSlider
          values={hsl}
          lows={[0, 0, 0]}
          highs={[360, 100, 100]}
          steps={[0.1, 0.1, 0.1]}
          names={[
            <InfoLabel name="H" info="Hue in degrees" />,
            <InfoLabel
              name="S"
              info="Saturation: 0 is grayscale, 100 is as saturated as it can be without changing the hue or luminance"
            />,
            <InfoLabel
              name="L"
              info="Lightness: unlike HSL/HSV, this actually approximates how we perceive lightness"
            />,
          ]}
          setValues={(val) => {
            setColor(val);
            setColorMode();
          }}
        >
          <InfoLabel
            name="HSLuv"
            info="Hue, saturation, and lightness in a way that approximates how we actually perceive color and not how computers store it."
            inner={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "2xl",
            }}
          />
        </TripleSlider>
      </SimpleGrid>
    </Box>
  );
};

export default Home;
