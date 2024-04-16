import { ReactElement, useEffect, useRef } from "react";
import { TextField } from "@mui/material";
import { EndAdornment } from ".";

interface IConvertInputProps {
  disabled?: true;
  focus?: true;
  iso?: string;
}

export function ConvertInput({ disabled, focus, iso }: IConvertInputProps): ReactElement {
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (focus) {
      input.current?.focus();
    }
  }, [focus]);

  return (
    <TextField
      disabled={disabled}
      inputRef={input}
      InputProps={{ endAdornment: <EndAdornment iso={iso} /> }}
    />
  );
}
