# introduce_typescript
TypeScriptの練習用リポジトリ

# 新しいプロジェクトの作成方法

新しいフォルダを作成して、その下に環境を作ります。

```
# 新しいフォルダを作成する
mkdir sample_dir
cd sample_dir

# 新しいnpmプロジェクトを作成する
npm init

# TSC, ESlint, Node.js用の型宣言をインストールする
npm install --save-dev typescript ts-node eslint @types/node

# tsconfig.jsonを作成する
npx tsc --init

# ESlintの初期設定を実行する
# この設定の中でTypeScriptを使用するかどうか聞かれるので、YesにするとTypeScript用のプラグインなどがインストールされる。
npx eslint --init

# srcフォルダ配下にソースコードを作成する
mkdir src
touch src/index.ts

# コンパイルは`tsc`コマンド
npx tsc ./src/index.ts

# 実行は`node`コマンド
node ./dist/index.js

# `ts-node`はコンパイルと実行を同時にしてくれる
npx ts-node ./src/index.ts
```
