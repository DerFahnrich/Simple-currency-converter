import "./EndAdornmanet.css";
import { ReactElement } from "react";

interface IEndAdornmentProps {
  iso?: string;
}

export function EndAdornment({ iso }: IEndAdornmentProps): ReactElement {
  return <div className="end-adornment">{iso}</div>;
}
