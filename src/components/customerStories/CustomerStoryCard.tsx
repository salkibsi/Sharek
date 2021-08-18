import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

export const CustomerStoryCard = ({
  customerStory,
  prefix,
}: Prefix & {
  customerStory: AllContentfulCustomerStoryProps;
}) => {
  const { slug, company } = customerStory;
  const pagePath = `${prefix}/customer-stories/${slug}/`;
  const { logo, cover } = company;
  const { childImageSharp } = logo.localFile || {};
  const logoImage = childImageSharp ? <Img {...childImageSharp} /> : null;
  const coverImage = cover && childImageSharp ? <Img {...childImageSharp} /> : null;
  return (
    <Link to={pagePath}>
      <div className="card card-more-stories mb-4 mx-auto px-4">
        <div className="h-50 d-table">
          <div className="card-image-wrapper">{logoImage}</div>
        </div>
        <div className="h-50 d-table">
          <div className="card-image-wrapper">{coverImage}</div>
        </div>
      </div>
    </Link>
  );
};
