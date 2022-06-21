import {
  Editable,
  EditableInput,
  EditablePreview,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";

export function TextInput({
  value,
  setValue,
  submit,
  children,
  validPattern,
  partialPattern,
}: {
  value: string;
  setValue: (value: string) => void;
  submit: (value: string) => void;
  children?: React.ReactNode;
  validPattern: RegExp;
  partialPattern: RegExp;
}) {
  return (
    <Stack p="2">
      {children}
      <Editable
        startWithEditView
        maxW="10ch"
        minW="7ch"
        value={value}
        onChange={(val) => {
          if (partialPattern.test(val)) {
            setValue(val);
          }
        }}
        onSubmit={(val) => {
          let groups = val.match(validPattern);
          if (groups) {
            submit(groups[1]);
          }
        }}
      >
        <EditablePreview textDecor="underline" />
        <EditableInput type="text" size={7} spellCheck={false} />
      </Editable>
    </Stack>
  );
}
