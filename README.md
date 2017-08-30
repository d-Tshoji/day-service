
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

- ##### pugの監視
  pugファイルをhtmlファイルにコンパイルしてdistにエクスポート
  > `$ gulp pug`

- #### sassの監視
  sassファイルをcssファイルにコンパイルしてdistにエクスポート
  > `$ gulp sass`

- #### imageの監視
  imageファイルを圧縮してdist/imgにエクスポート
  > `$ gulp imagemin `

- #### jsの監視
  jsをの変更点をdistにエクスポート
  > `$ gulp js `