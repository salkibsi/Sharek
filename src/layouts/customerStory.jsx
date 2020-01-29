// @flow

import React from 'react';
import { graphql } from 'gatsby';

import { MarkdownContent } from '../components/MarkdownContent';
import { DefaultHeader } from '../components/Header';
import { CompanyContent, OtherCustomerStories } from '../components/customerStories';
import { Title } from '../layouts/utils';

export default ({
  data,
  lang,
  prefix
}: {|
  ...Props,
  data: {|
    contentfulCustomerStory: CustomerStory,
    allContentfulCustomerStory: Object
  |}
|}) => {
  const { id, title, subtitle, language, content, company } = data.contentfulCustomerStory;
  const otherUserStories = data.allContentfulCustomerStory.edges
    .filter(({ node }) => node.id !== id)
    .map(({ node }) => node);
  const hasOtherCustomerStories = otherUserStories.length > 0;
  return (
    <div>
      <Title title={title} description={subtitle} />
      <DefaultHeader lang={lang} language={language} title={title} subtitle={subtitle} />
      <main className="main-content">
        <section className="section ">
          <div className="container container-medium">
            <div className="user-story-section row">
              <div className="col-md-4 mb-6">
                <CompanyContent company={company} />
              </div>
              <div className="col-md-8">
                <div className="px-3">
                  <MarkdownContent content={content} />
                </div>
              </div>
            </div>
            {hasOtherCustomerStories && (
              <div className="other-customer-stories-section row">
                <div className="col-md-12">
                  <OtherCustomerStories customerStories={otherUserStories} prefix={prefix} />
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export const pageQuery = graphql`
  query($id: String!) {
    contentfulCustomerStory(id: { eq: $id }) {
      id
      slug
      title
      subtitle
      language
      content {
        childMdx {
          body
        }
      }
      company {
        name
        contactName
        contactTitle
        logo {
          fluid(maxWidth: 150) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        cover {
          fluid(maxWidth: 150) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        mainQuote {
          childMdx {
            body
          }
        }
        yearFounded
        funding
        employeeCount
        sector
        location
        stage
      }
    }
    allContentfulCustomerStory(sort: { order: DESC, fields: [date] }) {
      edges {
        node {
          id
          slug
          company {
            logo {
              fluid(maxWidth: 150) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            cover {
              fluid(maxWidth: 150) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;
