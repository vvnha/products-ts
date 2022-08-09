import * as React from 'react';
import { header } from '../../portfolio';
import Navbar from '../Navbar/Navbar';

import './Header.scss';

// export interface HeaderProps {

// }

export default function Header() {
  const { homepage, title } = header;

  return (
    <header className="header center">
      <h3>
        {homepage ? (
          <a href={homepage} className="link">
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  );
}
