import { Box, chakra, ChakraProps, Tooltip } from "@chakra-ui/react";

// https://stackoverflow.com/questions/10454518/javascript-how-to-retrieve-the-number-of-decimals-of-a-string-number
function decimalPlaces(num: number | string) {
  var match = ("" + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  if (!match) {
    return 0;
  }
  return Math.max(
    0,
    // Number of digits right of decimal point.
    (match[1] ? match[1].length : 0) -
      // Adjust for scientific notation.
      (match[2] ? +match[2] : 0)
  );
}
export function clamp_and_round(
  val: number,
  lo: number,
  hi: number,
  step: number
) {
  const clamped = Math.min(Math.max(val, lo), hi);
  const prec = decimalPlaces(step);
  return Math.round(clamped * Math.pow(10, prec)) / Math.pow(10, prec);
}

export function InfoLabel({
  name,
  info,
  inner,
}: {
  name: string;
  info: string;
  inner?: ChakraProps;
}) {
  return (
    <Tooltip label={info}>
      <Box p="2" {...inner} borderRadius="lg">
        {name}
      </Box>
    </Tooltip>
  );
}
