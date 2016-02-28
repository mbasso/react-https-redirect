import React from 'react';

class HttpsRedirect extends React.Component {

  isLocalHost(hostname) {
    return !!(hostname === 'localhost' ||
              hostname === '[::1]' ||
              hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
  }

  render() {
    if (window.location.protocol === 'http:' && !this.isLocalHost(window.location.hostname)) {
      window.location.protocol = 'https:';
    }

    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

HttpsRedirect.propTypes = {
  children: React.PropTypes.array,
};

export default HttpsRedirect;
