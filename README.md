# ./Make Utils
간단한 테스트 유틸을 만들어보는 깃.<br>
혹은 나중에 필요한 셋팅을 pull 받아 바로 적용할 예정.

###### * 셋팅에 필요한 패키지는 package.json을 확인

****

### Proj. tree
```
utils
  ├─ /makeUtils
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


### ./webpack.config.babel.js
* ./webpackEntry.js output : webpack entries 
```

entries :   ./makeUtils/workFolder/**/*.js
```


### - node app
```

```