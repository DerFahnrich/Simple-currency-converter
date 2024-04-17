import { ChangeEventHandler, ReactElement, useEffect, useRef } from "react";
import { TextField } from "@mui/material";
import { EndAdornment } from ".";

interface IConvertInputProps {
  disabled?: true;
  focus?: true;
  iso?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
  value: string;
}

export function ConvertInput(props: IConvertInputProps): ReactElement {
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (props.focus) {
      input.current?.focus();
    }
  }, [focus]);

  return (
    <TextField
      disabled={props.disabled}
      inputRef={input}
      InputProps={{ endAdornment: <EndAdornment iso={props.iso} /> }}
      onChange={props.onChange}
      value={props.value}
    />
  );
}
