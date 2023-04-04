const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  // * entry: 진입점으로서, 프로젝트가 돌아가기 위해 가장 먼저 실행될 파일
  entry: {
    // 여기서 app은 진입점에 해당하는 파일의 별칭.
    // __dirname: 현재 파일의 위치를 알려주는, node.js 상의 전역 변수.
    app: path.join(__dirname, 'main.js'),
  },
  // * output: 진입점으로 웹팩이 들어가서 모든 내용을 처리해서 나오는 결과물에 대한 설정
  output: {
    // 결과물 파일명
    filename: '[name].js', // 진입점의 별칭(여기선 app)이 name에 대입됨. -> app.js
    // 결과물 파일 저장 경로
    path: path.join(__dirname, 'dist'), // 확장자가 없으니 디렉토리명이 됨.
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
};