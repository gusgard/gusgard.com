import React from 'react';
import PropTypes from 'prop-types';

const BUILD_TIME = new Date().getTime();

export default class HTML extends React.Component {
  static propTypes = {
    body: PropTypes.string
  };

  render() {
    let css;
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          dangerouslySetInnerHTML={{
            __html: require('!raw!../public/styles.css')
          }}
        />
      );
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          {css}
        </head>
        <body itemScope itemType="http://schema.org/WebPage">

          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
              {/* <figure
                className="circle-crazy parallax"
                data-wrapper="#main-content"
                data-translate-y-speed="-0.66"
                data-rotate-speed="0.075"
              >
                <div class="c" />
                <div class="c2">
                  {Array(36).fill('').map((j) => <i />)}
                </div>
                <div class="c3" />
                <div class="c4" />
                <div class="c5" />
                <div class="c6" />
              </figure> */}

          <script src={`${__PATH_PREFIX__}/Parallax.js`}></script>
        </body>
      </html>
    );
  }
}
