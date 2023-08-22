import React, { FC } from 'react';

interface ILogo {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export const Logo: FC<ILogo> = ({ src, alt, className, width = 100, height = 24 }) => (
  <img src={src} alt={alt} className={className} width={width} height={height} />
);
