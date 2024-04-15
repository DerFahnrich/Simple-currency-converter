import "./Header.css";

import { Divider } from "@mui/material";
import { ReactElement } from "react";

export function Header(): ReactElement {
  return (
    <header className="header">
      <div className="upper-header">
        <h1>Valuta</h1>
        <h3>.se</h3>
      </div>
      <h3 className="lower-header">Converter</h3>
      <Divider />
    </header>
  );
}
