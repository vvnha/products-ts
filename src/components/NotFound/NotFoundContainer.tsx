import React from 'react';
import '../About/About.scss';

export interface NotFoundContainerProps {
  name: string;
}

function NotFoundContainer({ name }: NotFoundContainerProps) {
  return (
    <div className="about center">
      <h1>
        Sorry,<span className="about__name">{name} Not Found</span>
      </h1>
    </div>
  );
}

export default NotFoundContainer;
