# ./Make Utils
간단한 테스트 유틸을 만들어보는 깃.<br>
혹은 나중에 필요한 셋팅을 pull 받아 바로 적용할 예정.

###### * 셋팅에 필요한 패키지는 package.json을 확인

****

### Proj. tree
```
utils
  ├─ /makeUtils (Standard)
  │  ├─ /workFolder
  │  │  │
  │  │  ├─ /folder1
  │  │  │  ├─ index.html
  │  │  │  └─ /js
  │  │  │     └─ folderTest1.js
  │  │  │
  │  │  └─ /folder2
  │  │     ├─ index.html
  │  │     └─ /js
  │  │        ├─ folderTest2.js
  │  │        ├─ folderTest2.js 
  │  │        └─ /innerFolder1
  │  │           └─ innerJS.js
  │  │
  │  └─ /workFolderDist (bundle Output)
  │     ├─ folder1.bundle.js 
  │     └─ folder2.bundle.js
  │  
  ├─ node_modules
  ├─ package.json
  ├─ README.md
  ├─ app.js
  ├─ reqHandler.js
  ├─ router.js
  ├─ server.js
  ├─ webpack.config.babel.js
  └─ webpackEntry.js
```


## - webpack --watch
Babel 및 bundle 기능 세팅 되어있음.
```
- ES2015+ > ES5 
- bundle output 
```
- _'./makeUtils/workFolder'_ 까지 파일구조 맞춰줄 것.

## - node app
_'index.html'_ 은 생략 가능하나, **마지막엔 '/'를 꼭 붙여줄 것**
```
ex) //localhost:4000/workFolder/folder1/(index.html)
```

다른 파일은 파일명을 **필수**로 넣어야 함.
```
ex) //localhost:4000/workFolder/folder1/test.html
```

## node app & webpack -w 
webpack과 node를 동시 실행하려면 터미널에 하단 커맨드 입력
```
> npm start
```