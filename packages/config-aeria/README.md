# eslint-config-aeria

Official [shareable ESLint configuration](https://eslint.org/docs/latest/extend/shareable-configs) for Aeria Framework, meant to keep code consistent and readable across projects. Read the source code to view all the rules.

## How to use it

1. Install the dependencies:

```sh
$ npm install -D eslint eslint-config-aeria
```


2. Create a `eslint.config.js` file in the root of your project containing the following:

```js
// eslint.config.js
module.exports = [
  require('eslint-config-aeria'),
]
```

