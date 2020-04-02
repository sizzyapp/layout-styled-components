<h1 align="center">Welcome to layout-styled-components 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/layout-styled-components" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/layout-styled-components.svg">
  </a>
  <a href="https://github.com/kitze/layout-styled-components/blob/master/README.md" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://twitter.com/@thekitze" target="_blank">
    <img alt="Twitter: thekitze" src="https://img.shields.io/twitter/follow/kitze.svg?style=social" />
  </a>
</p>

> Styled Components Layout Helper Components

This project simplify uses `horizontal`, `grid`,`vertical` and `space` [`styled-components`](https://styled-components.com).

## Example

See [example/index.tsx](./example/index.tsx).

```js
const App = () => {
  return (
    <div>
      <Horizontal>
        <div>Hello</div>
        <div>World</div>
      </Horizontal>

      <hr />

      <Vertical>
        <div>Goodbye</div>
        <div>World</div>
      </Vertical>
    </div>
  );
};
```

Produces:

![ScreenShot](./ScreenShot.png)

## Install

```sh
yarn install && yarn watch
```

## Usage

```sh
cd examples && yarn start
```

See it in browser at http://localhost:1234

## Run tests

```sh
yarn run test
```

## Author

👤 **Kitze**

* Website: https://youtube.com/kitze
* Twitter: [@thekitze](https://twitter.com/@thekitze)
* Github: [@kitze](https://github.com/kitze)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/kitze/layout-styled-components/issues). 

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_