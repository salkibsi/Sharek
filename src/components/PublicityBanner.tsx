import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export const ClosingButton = ({ hide, isLight }: { hide: () => void; isLight?: boolean }) => (
  <button
    className={`position-absolute bg-transparent border-0 bottom-banner--button ${
      isLight ? 'bottom-banner--button-light' : 'bottom-banner--button-daark'
    }`}
    onClick={hide}
  >
    ×
  </button>
);

export const bannerClassName =
  'bottom-banner position-relative my-1 bg-white rounded font-weight-light text-center';

const Banner = ({ content, hide }: { content: Mdx; hide: () => void }) => (
  <div className={bannerClassName}>
    <div className="m-4">
      <MDXRenderer>{content.childMdx.body}</MDXRenderer>
    </div>
    <ClosingButton hide={hide} />
  </div>
);

const isVisibleNow = ({ node }: { node: { startAt: string; endAt: string } }) => {
  const now = Date.now();
  return new Date(node.startAt).getTime() <= now && new Date(node.endAt).getTime() >= now;
};

const bannerQuery = graphql`
  {
    allContentfulBanner {
      edges {
        node {
          title
          hideOnPage
          startAt
          endAt
          content {
            childMdx {
              body
            }
          }
        }
      }
    }
  }
`;

export const PublicityBanner = ({ pathname }: { pathname: string }) => {
  const result = useStaticQuery(bannerQuery);
  const [banner] = result.allContentfulBanner.edges;
  if (!banner) return null;

  const { content, hideOnPage } = banner.node;
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!isVisibleNow(banner) || pathname.includes(hideOnPage)) return;

    setShow(true);
  }, []);

  return show ? <Banner content={content} hide={() => setShow(false)} /> : null;
};
