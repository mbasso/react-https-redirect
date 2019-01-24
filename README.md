# React-https-redirect

[![npm](https://img.shields.io/npm/v/react-https-redirect.svg)](https://www.npmjs.com/package/react-https-redirect)
[![npm](https://img.shields.io/npm/l/react-https-redirect.svg)](https://github.com/mbasso/react-https-redirect/blob/master/LICENSE.md)

---

**⚠️ Security note ⚠️ - This element provides a client-side option when HSTS and server-enforced redirects aren't possible. Please don’t use this if you can configure the server.**
---

---

This is a React component equivalent of Polymer [platinum-https-redirect](https://elements.polymer-project.org/elements/platinum-https-redirect)

> The element redirects the current page to HTTPS, unless the page is loaded from a web server running on localhost.
> Using HTTP Strict Transport Security (HSTS) can be used to enforce HTTPS for an entire origin, following the first visit to any page on the origin. Configuring the underlying web server to redirect all HTTP requests to their HTTPS equivalents takes care of enforcing HTTPS on the initial visit as well. Both options provide a more robust approach to enforcing HTTPS, but require access to the underlying web server's configuration in order to implement.
> This element provides a client-side option when HSTS and server-enforced redirects aren't possible, such as when deploying code on a shared-hosting provider like GitHub Pages.

You can read more information [here](https://elements.polymer-project.org/elements/platinum-https-redirect).

## Installation

Using [npm](https://www.npmjs.com/package/react-https-redirect):

```bash
npm install --save react-https-redirect
```

Supposing a CommonJS environment, you can simply use the component in this way:

```javascript
import HttpsRedirect from 'react-https-redirect';

// you can just wrap your entire app to redirect it to the equivalent https version
// for example:
// http://example.com/    =>    https://example.com/

// you can also use a "disabled" prop to dinamically disable it
// <HttpsRedirect disabled={...}>

class HttpsApp extends React.Component {

  render() {
    return (
      <HttpsRedirect>
        <App />
      <HttpsRedirect/>
    );
  }
}
```


## Author
**Matteo Basso**
- [github/mbasso](https://github.com/mbasso)
- [@Teo_Basso](https://twitter.com/Teo_Basso)

## Copyright and License
Copyright (c) 2016, Matteo Basso.

React-https-redirect source code is licensed under the [MIT License](https://github.com/mbasso/react-https-redirect/blob/master/LICENSE.md).
