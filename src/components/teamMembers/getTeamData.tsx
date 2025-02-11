import React, { ReactNode } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { DynamicTrans } from '../utils';
import { GatsbyImageFluidProps } from 'gatsby-image';

export type AuthorProps = {
  name: string;
  role: string;
  description: ReactNode;
  profileImage: GatsbyImageFluidProps;
  gif: LedgistaGif;
  linkedIn: string;
  twitter?: string;
  article?: string;
};
type LedgistaGif = {
  file: FileUrl;
};
type FileUrl = {
  url: string;
};
type LedgistaProps = {
  key: string;
  name: string;
  role: string;
  gif: LedgistaGif;
  profileImage: GatsbyImageFluidProps;
  description: string;
  linkedIn: string;
  twitter?: string;
  article?: string;
};

export const getTeamData = (): {
  [key: string]: AuthorProps;
} => {
  const ledgistas: LedgistaProps[] = useStaticQuery(graphql`
    query {
      allContentfulLedgista {
        nodes {
          key
          name
          role
          ...LedgistaGif
          ...LedgistaProfileImage
          description
          twitter
          linkedIn
          article
        }
      }
    }
  `).allContentfulLedgista.nodes;

  const team = Object.fromEntries(
    ledgistas.map(
      ({ key, name, description, article, role, linkedIn, twitter, profileImage, gif }) => [
        key,
        {
          name,
          description: <DynamicTrans>{description}</DynamicTrans>,
          role,
          article,
          profileImage,
          gif,
          linkedIn: `https://linkedin.com/in/${linkedIn}/`,
          ...(twitter ? { twitter: `https://twitter.com/${twitter}` } : {}),
        },
      ]
    )
  );

  return team;
};
