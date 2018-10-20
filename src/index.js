import PropTypes from 'prop-types';

const isLocalHost = hostname => !!(
  hostname === 'localhost' ||
  hostname === '[::1]' ||
  hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);

const HttpsRedirect = ({ children }) => {
  if (
    typeof window !== 'undefined' &&
    window.location &&
    window.location.protocol === 'http:' &&
    !isLocalHost(window.location.hostname)
  ) {
    window.location.href = window.location.href.replace(
      /^http(?!s)/,
      'https'
    );
  }

  return children;
};

HttpsRedirect.propTypes = {
  children: PropTypes.node,
};

export default HttpsRedirect;
