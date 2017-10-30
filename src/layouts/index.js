import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import '../scss/boot.scss';
// import 'bootstrap-sa../static/javascripts/bootstrap/collapse.js';

import Footer from '../components/Footer';
import MetaTags from '../components/MetaTags';

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func
  };

  render() {
    const { location } = this.props;

    const isRoot = location.pathname === '/';

    return (
      <div>
        <Helmet
          title="Gustavo Gard"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' }
          ]}
        >
          <html lang="en" /> {/* this is valid react-helmet usage! */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="HandheldFriendly" content="True" />
        </Helmet>
        <section className="main-content" id="container">
          {this.props.children()}

          <div>
            <figure
              className="circle-crazy parallax circle-1"
              data-wrapper="#container"
              data-translate-y-speed="-0.18"
              data-translate-x-speed="-0.13"
              data-rotate-speed="0.15"
              data-opacity-speed="-0.6"
            >
              {Array(36)
                .fill('')
                .map((j, index) => (
                  <i className="circle-line red large" key={index} />
                ))}
            </figure>

            <figure
              className="circle-crazy parallax circle-2"
              data-opacity-speed="-1.5"
              data-rotate-speed="0.35"
              data-translate-y-speed="0.66"
              data-translate-x-speed="0.26"
              data-wrapper="#container"
            >
              {Array(36)
                .fill('')
                .map((j, index) => <i className="circle-line" key={index} />)}
            </figure>

            <figure
              className="circle-crazy parallax circle-3"
              // data-opacity-initial="0.45"
              data-opacity-speed="-0.7"
              data-rotate-speed=".55"
              data-translate-y-speed="-0.04"
              data-translate-x-speed="-0.26"
              data-wrapper="#container"
            >
              {Array(36)
                .fill('')
                .map((j, index) => (
                  <i className="circle-line small" key={index} />
                ))}
            </figure>

            <figure
              className="circle-crazy parallax circle-4"
              data-rotate-speed="0.55"
              data-translate-y-speed="0.76"
              data-translate-x-speed="-0.6"
              data-wrapper="#container"
              data-rotate-speed="0.35"
              data-opacity-speed="-3.1"
              data-opacity-initial="0.45"
            >
              {Array(36)
                .fill('')
                .map((j, index) => (
                  <i className="circle-line large" key={index} />
                ))}
            </figure>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
