vuejs를 사용하며 놓치고 가는 부분이 있을수 있으니 다시 보자;;;
# vue-news
[인프런강의 vuejs 완벽가이드](https://www.inflearn.com/course/vue-js/dashboard)
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Hacker News open API 사용함.
깃헙 [hacker-news-pwas(github)](https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md)

### [HOC (higher-order component)](https://joshua1988.github.io/vue-camp/design/pattern5.html)  
기본적으로 리액트의 하이 오더 컴포넌트에서 기원된 것임.  
[리액트의 하이오더컴포넌트 소개](https://reactjs.org/docs/higher-order-components.html)
```
컴포넌트의 로직을 재사용하기 위한 기술.
HOC를 많이 사용하면 할수록 컴포넌트의 깊이가 깊어지면서(의미 없는 중간 컴포넌트가 필요함.) 컴포넌트간의 통신이 불편해짐.
```

### [Mixins](https://joshua1988.github.io/vue-camp/reuse/mixins.html)
```
믹스인(Mixins)은 여러 컴포넌트 간에 공통으로 사용하고 있는 로직, 기능들을 재사용하는 방법이다.
믹스인에 정의할수 있는 재사용 로직은 data, methods, created등과 같은 컴포넌트 옵션이다.
```
