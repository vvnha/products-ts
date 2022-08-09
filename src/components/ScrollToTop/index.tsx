import React from 'react';
import './ScrollToTop.scss';

export default function ScrollToTop() {
  return (
    <div className="scroll-container">
      <div className="scroll-top">
        <a aria-label="Scroll up" href="#top">
          <i aria-hidden="true" className="fas fa-arrow-up" />
        </a>
      </div>
    </div>
  );
}
