import './Header.css';
import { ReactElement } from 'react';

export function Header(): ReactElement {
  return (
    <header className="header">
      <nav className="upper-header">
        <h1>Currenct Exchanger Copy</h1>
        <h3>.net</h3>
      </nav>
      <h3 className="lower-header">Exchanger, not a converter</h3>
    </header>
  );
}
