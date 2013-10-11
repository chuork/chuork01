# 札幌市中央区Ruby会議

## 実行委員向け

### 準備

  1. リポジトリをローカルにクローン

        git clone git@github.com:chuork/chuork01.git

  2. 必要なgemをインストール

        cd chuork01
        bundle install

### 修正

  1. 以下のコマンドでローカルにサーバーを立ち上げ

        middleman server

  2. ブラウザで以下のURLを開く

    http://localhost:4567

  3. sourceディレクトリかdataディレクトリ内のファイルを修正

  4. ブラウザを更新して確認

  5. まあまあだったら、コミットしてプッシュする

        git add .
        git commit -m "どれそれ修正"
        git push origin master

### デプロイ

  1. 以下のコマンドでHTMLなどをbuildディレクトリ内に生成

        middleman build

  2. 以下のコマンドでGitHub Pagesにデプロイ

        middleman deploy
