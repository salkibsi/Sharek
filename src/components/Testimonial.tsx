import React, { ReactNode } from 'react';
import Img, { GatsbyImageProps } from 'gatsby-image';
import { targetBlank } from '../helpers';

export const Testimonial = ({
  img,
  name,
  description,
  col,
  url,
  rounded,
  minHeight = 80,
}: {
  img: GatsbyImageProps | undefined;
  name: string;
  description: ReactNode | string;
  col: number;
  url?: string;
  rounded?: boolean;
  minHeight?: number;
}) => (
  <div
    className={`testimonial col-lg-${col} d-flex flex-column justify-content-start align-items-center mb-4 mb-lg-0`}
  >
    <div
      className="d-flex align-items-center justify-content-center mt-4"
      style={minHeight ? { minHeight } : {}}
    >
      {img && (
        <a {...targetBlank} href={url}>
          <Img {...img} alt={name} className={rounded ? 'avatar' : ''} />
        </a>
      )}
    </div>
    <div className="d-flex flex-column justify-content-between mt-4 h-100">
      <div className="testimonial-description">{description}</div>
      <small className="text-muted mt-0" style={{ minHeight: '80px' }}>
        {name}
      </small>
    </div>
  </div>
);
