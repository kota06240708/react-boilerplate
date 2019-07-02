# react-boilerplate

Reactの開発環境を構築しました。

## Overview
* [PUG](https://github.com/pugjs/pug)
* [React](https://github.com/facebook/react)
  * [styled-components](https://www.styled-components.com/)
* [Redux](https://github.com/reduxjs/redux)
  * [immer](https://github.com/immerjs/immer)
  * [reselect](https://github.com/reduxjs/reselect)
* [Flow](https://github.com/facebook/flow)

> pugは静的なhtmlを生成するのに使っています。

## Install

yarn を使うので下記に従いyarn インストールしてください。

```bash
$ brew install yarn
```

## Build Setup

```bash
# 依存モジュールをインストール。
$ yarn install

# 開発環境生成 + 開発開始
$ yarn start

# 本番環境生成
$ yarn build
```

開発をする際、`yarn start`をして頂き、[http://localhost:8080](http://localhost:8080) にブラウザにアクセスすればデバックできます。

`yarn build`でproductionフォルダ内に納品ファイルが生成されます。

## Structure

```sh
.
├── dist       # 開発ファイル
├── docs       # 本番環境向けのファイル書出先
├── src        # 実際に手を動かすファイル
├── server.js  # browser-syncの設定ファイル
└── system     # ビルド環境

```
