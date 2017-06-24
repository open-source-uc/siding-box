# SidingBox

📦 Electron Menubar app for Dropbox-like synchronization with Siding

[![dependencies][dependencies-image]][dependencies-url] [![dev-dependencies][dev-dependencies-image]][dev-dependencies-url] [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## Development

Clone this repository:

```sh
git clone https://github.com/open-source-uc/siding-box.git
cd siding-box
```

Install dependencies:

```sh
yarn install
```

### Desktop

Run Electron app:

```sh
cd packages/siding-box-desktop
yarn start
```

#### Production

Create a release build with:

```sh
NODE_ENV=production yarn run make
```

[dependencies-image]: https://david-dm.org/open-source-uc/siding-box.svg
[dependencies-url]: https://david-dm.org/open-source-uc/siding-box
[dev-dependencies-image]: https://david-dm.org/open-source-uc/siding-box/dev-status.svg
[dev-dependencies-url]: https://david-dm.org/open-source-uc/siding-box#info=devDependencies
