<h1 align="center">
  <a href="https://moonlight8978.github.io/">
    moonlight8978.github.io
  </a>
</h1>

<p align="center">
  Simple blog using
  <a href="https://reactjs.org/"><b>React</b></a>, written in Markdown.
</p>

<p align="center">
  <a href="https://circleci.com/gh/moonlight8978/moonlight8978.github.io/tree/develop" >
    <img src="https://circleci.com/gh/moonlight8978/moonlight8978.github.io/tree/develop.svg?style=svg" alt="CircleCI">
  </a>
  <a href="https://codecov.io/gh/moonlight8978/moonlight8978.github.io">
    <img src="https://codecov.io/gh/moonlight8978/moonlight8978.github.io/branch/develop/graph/badge.svg" alt="codecov">
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square" alt="code style: prettier">
  </a>
</p>

# Table of Contents

- [Setup](#setup)

- [Build and Release](#build-and-release)

- [References](#references)

# Setup

Use make commands to setup with Docker
Otherwise, use yarn commands

### Running app

Docker

```bash
make build
make install
make up
# Access app log
make log
```

Local npm

```bash
yarn
yarn dev
```

Then access app http://localhost:9000

Storybook is available at port 6006 http://localhost:6006

Close the app by

```bash
make down
# Or with local installed yarn
yarn flow stop
```

### Utilities

```bash
# Reinstall yarn packages
make install

# Test the app
make test
yarn test:unit

# Test with debugger
make test-debug
yarn test:unit:debug

# Run flow check
make flow
yarn flow

# Linting
make lint
yarn lint

# Calculate Lines of code
make loc
yarn loc
```

# Build and Release

**!! Deprecated !!** Currently use CircleCI for CICD.

```bash
yarn build
yarn deploy
```

# References

- README style is inspired by [React Native](https://github.com/facebook/react-native/blob/master/README.md)
