import React from 'react';
import GatsbyLink from 'gatsby-link';

const Footer = () => (
  <div>
    {/* <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="medium-8 medium-offset-2 text-center">
            I'm{' '}
            <GatsbyLink
              className="footer-link"
              to="/"
              title="gusgard.com Home"
            >
              Gustavo Gard
            </GatsbyLink>, a web developer, a proud wanderer and a passionate
            doer. My mission is to write clean and efficient code, to solve
            problems on the Web and to learn something more. Read{' '}
            <GatsbyLink
              className="footer-link"
              to="/about"
              title="About gusgard.com"
            >
              more about me
            </GatsbyLink>{' '}
            or <GatsbyLink
              className="footer-link"
              to="/contact"
              title="Contact Gustavo"
            >
            get in touch
            </GatsbyLink>.
          </div>
        </div>
      </div>
    </footer> */}

    <footer className="footer-social">
      <ul className="social">
        <li>
          <a
            target="_blank"
            href="https://twitter.com/gusgard_"
            title="tweet me"
          >
            <i className="icon-twitter" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://github.com/gusgard"
            title="contribute"
          >
            <i className="icon-github" />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://medium.com/@gusgard" title="medium">
            <i className="icon-medium" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://linkedin.com/in/gusgard/"
            title="linkedin"
          >
            <i className="icon-linkedin" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="mailto:gusgard@gmail.com?subject=Hi!"
            title="gusgard@gmail.com"
          >
            <i className="icon-mail" />
          </a>
        </li>
      </ul>
      <div className="text-center">
        Copyright {new Date().getFullYear()}{' '}
        <GatsbyLink to="/" title="Gustavo Gard Blog">
          Gustavo Gard
        </GatsbyLink>{' '}
        <span className="separator"> • </span> Design by{' '}
        <a href="https://whitebear.io" target="_blank">
          Whitebear
        </a>
      </div>
    </footer>
  </div>
);

export default Footer;
