
# project day-servise
#### このプロジェクトのコマンド説明
***

- ##### package導入
  package.jsonの内容に従って、packageをインストールします。
  > `$ npm install`

- ##### コードの監視
  **Gulpfile.js**の`gulp.task('default',['pug', 'sass', 'js'], function () {`
  []内に登録されたファイルをコンパイル、圧縮をした後にsrcからdistにエクスポートすることができる。
  > `$ gulp`

- ##### サーバー起動
  サーバーを立ち上げる
  > `$ gulp serve`

- ##### pugファイルのコンパイル
  pugファイルをhtmlファイルにコンパイルしてdistにエクスポート
  > `$ gulp pug`

- ##### sassファイルのコンパイル
  sassファイルをcssファイルにコンパイルしてdistにエクスポート
  > `$ gulp sass`

- ##### imageファイルの圧縮
  imageファイルを圧縮してdist/imgにエクスポート
  > `$ gulp imagemin `

- ##### jsのコンパイル
  jsをの変更点をdistにエクスポート
  > `$ gulp js `