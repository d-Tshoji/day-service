
project day-servise

このプロジェクトについてコマンド説明など

//を除きターミナルに打ち込み実行可能

//npm install  // package導入
  .package.jsonの内容に従って、packageをインストールします。

//gulp  // 監視
  .gulp.task('default',['pug', 'sass', 'js'], function () {
  []内に登録されたファイルをコンパイル、圧縮、等をした後にsrcからdistにエクスポートできる。

//gulp serve  // サーバー起動
  .サーバーを立ち上げる

//gulp pug  //  pugの監視
  .pugファイルをhtmlファイルにコンパイルしてdistにエクスポート

//gulp sass //  sassの監視
  .sassファイルをcssファイルにコンパイルしてdistにエクスポート

//gulp imagemin // imageの監視
  .imageファイルを圧縮してdist/imgにエクスポート

//gulp js //  jsの監視
  .jsをの変更点をdistにエクスポート