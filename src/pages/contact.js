import React from 'react';
import Head from 'react-helmet';
import GatsbyLink from 'gatsby-link';
import Helmet from 'react-helmet';

import Separator from './../components/Separator';
import Menu from './../components/Menu';
import MetaTags from './../components/MetaTags';
import AvatarImg from './../../static/images/avatar.jpg';

export default function Contact({ data }) {
  const { title, description, siteUrl } = data.site.siteMetadata;
  return (
    <div>
      <MetaTags
        title={`Contact - ${title}`}
        path={`/contact`}
        siteUrl={siteUrl}
        tags="webdev, programming, javascript"
        description={description}
      />
      <Menu />
      <section className="blog container about">
        <div className="medium-8 medium-offset-2">
          <header className="header">
            <div className="row text-center">
              <img
                className="header-avatar"
                src={AvatarImg}
                alt="Gustavo Gard"
              />
              <h1>
                In need for a Web Developer? <br />Search no more.
              </h1>
            </div>
          </header>
          <Separator />
          <main role="main">
            <p>
              Lorem ipsum dolor sit amet, __consectetur__ adipiscing elit. Cras
              imperdiet nec erat ac condimentum. Nulla vel rutrum ligula. Sed
              hendrerit interdum orci a posuere. Vivamus ut velit aliquet,
              mollis purus eget, iaculis nisl. Proin posuere malesuada ante.
              Proin auctor orci eros, ac molestie lorem dictum nec. Vestibulum
              sit amet erat est. Morbi luctus sed elit ac luctus. Proin blandit,
              enim vitae egestas posuere, neque elit ultricies dui, vel mattis
              nibh enim
            </p>
            <p>
              Lorem ipsum dolor sit amet adipiscing elit. Cras imperdiet nec
              erat ac condimentum. Nulla vel rutrum ligula. Sed hendrerit
              interdum orci a posuere. Vivamus ut velit aliquet, mollis purus
              eget, iaculis nisl. Proin posuere malesuada ante. Proin auctor
              orci eros, ac molestie lorem dictum nec. Vestibulum sit amet erat
              est. Morbi luctus sed elit ac luctus. Proin blandit, enim vitae
              egestas posuere, neque elit ultricies dui, vel mattis nibh enim
            </p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              <a href="https://linkedin.com/in/gusgard/">LinkedIn profile</a>,
              my <a href="https://github.com/gusgard">GitHub profile</a> or{' '}
              <a href="mailto:gusgard@gmail.com?subject=Freelance%20Javascript%20development">
                contact me directly
              </a>. I like receiving email from people.
            </p>
            <p>
              <b>
                Lorem ipsum dolor sit amet adipiscing elit. Cras imperdiet nec
              </b>
            </p>
            <p>
              <a href="mailto:gusgard@gmail.com?subject=Freelance%20Javascript%20development">
                Email me
              </a>{' '}
              Lorem ipsum dolor sit amet adipiscing elit. Cras imperdiet nec
            </p>
          </main>
        </div>
      </section>
    </div>
  );
}

export const contactPageQuery = graphql`
  query ContactPageSiteMetadata {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`;
