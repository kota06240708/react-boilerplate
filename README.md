# react-boilerplate

Reactの開発環境です

## Branch
* **master** - stableなブランチです。
* **develop** - 開発中のブランチ

## Overview

* [**gulp**](https://github.com/gulpjs/gulp)
    * [PUG](https://github.com/pugjs/pug)
* [**webpack**](https://github.com/webpack/webpack)
    * [React](https://github.com/facebook/react)
    * [PostCSS](https://github.com/postcss/postcss-loader)
    * [sass](https://github.com/webpack-contrib/sass-loader)

> gulpはファイル生成とpugを使うのに使っています。

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
├── prod       # 本番環境向けのファイル書出先
├── src        # 実際に手を動かすファイル
├── server.js  # browser-syncの設定ファイル
└── system     # ビルド環境

```
