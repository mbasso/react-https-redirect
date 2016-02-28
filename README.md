# React-https-redirect

[![npm](https://img.shields.io/npm/v/react-https-redirect.svg)](https://www.npmjs.com/package/react-https-redirect)
[![npm](https://img.shields.io/npm/l/react-https-redirect.svg)](https://github.com/mbasso/react-https-redirect/blob/master/LICENSE.md)

This is a React component equivalent of Polymer [platinum-https-redirect](https://elements.polymer-project.org/elements/platinum-https-redirect)

> The element redirects the current page to HTTPS, unless the page is loaded from a web server running on localhost.

You can read more information [here](https://elements.polymer-project.org/elements/platinum-https-redirect).

## Installation

Using [npm](https://www.npmjs.com/package/react-https-redirect):

```bash
npm install --save react-https-redirect
```

Supposing a CommonJS environment, you can simply use the component in this way:

```javascript
import HttpsRedirect from 'react-https-redirect';

class App extends React.Component {

  render() {
    return (
      <Providers>
        <HttpsRedirect>
          <Childrens />
        </HttpsRedirect>
      <Providers />
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
