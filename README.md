<h1 align="center">
  <a href="https://moonlight8978.github.io/">
    Simple app for learning purpose
  </a>
</h1>

<p align="center">
  <a href="https://circleci.com/gh/moonlight8978/moonlight8978.github.io/tree/develop" >
    <img src="https://circleci.com/gh/moonlight8978/moonlight8978.github.io/tree/develop.svg?style=svg" alt="CircleCI">
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

# Run flow check
make flow
yarn flow

# Linting
make lint
yarn lint
```

# Build and Release

**!! Deprecated !!** Currently use CircleCI for CICD.

```bash
yarn build
yarn deploy
```

# References

- README style is inspired by [React Native](https://github.com/facebook/react-native/blob/master/README.md)

# Spec

Xây dựng 1 ứng dụng web/mobile sử dụng reactjs/react-native có các chức năng sau
Liệt kê danh sách tên 30 repos đầu tiên của một người dùng github bất kỳ (sau khi nhập tên chính xác của người dùng vào 1 textfield)
Nếu người dùng đó có nhiều hơn 30 repos, có thể load thêm 30 repos tiếp theo bằng cách ấn nút “Load more” ở cuối danh sách
Không hiện nút “Load more" nếu đã load tất cả repos của người dùng
Hiển thị số lượng public repos người dùng đó có, và số repos đã load ở dưới textfield
Hiển thị số stargazers của mỗi repo cạnh tên của repo, có nút “Load stargazers" cho từng repo.
Liệt kê danh sách 30 stargazers đầu tiên khi ấn vào nút “Load stargazers", nếu repo có nhiều hơn 30 stargazers, hiển thị nút “Load more stargazers" ở cuối danh sách stargazers.
Có thể xem được stargazers của nhiều hơn 1 repo cùng 1 lúc
Disable các nút “Load more" và “Load more stargazers" khi đang load dữ liệu, enable lại sau khi load thành công hoặc thất bại
Hiển thị indicator “Loading" trong các nút “Load more" và “Load more stargazers" sau khi ấn nút và chưa load xong

Nghiên cứu các keyword sau, khuyến khích áp dụng vào việc implement app kể trên:
redux, redux-starter-kit
react hook API
react-redux
axios, Promise, async/await

Chỉ xây dựng phần front-end của app, sử dụng API có sẵn của github để lấy dữ liệu, tham khảo doc (https://developer.github.com/v3/)
