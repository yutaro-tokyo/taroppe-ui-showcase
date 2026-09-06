# Taroppe UI Showcase

Taroppeで使用しているUIをもとに構成した、フロントエンド限定の小さなショーケースです。

固定されたサンプルデータを使って、学習統計カード、テーマ選択、学習モード選択、ボタンなどのUIを表示します。バックエンドや外部サービスへは接続しません。

## このリポジトリに含まれるもの

- Reactで作成した表示用コンポーネント
- Tailwind CSSによるスタイルとテーマ
- UI確認用の固定サンプルデータ
- ローカル起動に必要な最小限のVite設定

## ローカルで起動する

Node.jsとnpmが必要です。

```bash
git clone https://github.com/yutaro-tokyo/taroppe-ui-showcase.git
cd taroppe-ui-showcase
npm install
npm run dev
```

ターミナルに表示されたローカルURLをブラウザで開いてください。環境変数や外部サービスの設定は必要ありません。

本番用ビルドを確認する場合は、次を実行します。

```bash
npm run build
```

## ライセンス

現在、オープンソースライセンスは設定していません。ライセンスを追加するまでは、ソースコードの公開目的は閲覧に限られます。
