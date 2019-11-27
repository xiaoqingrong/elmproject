This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About
此项目是 react + antd-design 构建的elm项目，所有的数据都是从服务器实时获取的真实数据。这些数据都是根据一个大佬的项目中拿来用的，我看他只有vue写elm项目。我也跟着他的接口跟着写啦基于react的elm版本。因为代码基本上都是自己边学边写的，但我都花了很多时间学好才用到上面的，写得可能技术上有些欠缺。我觉得对于react入门进阶还是有点点帮助的。因为我写了这个项目以后，感觉学到东西还是不少的。

### `技术栈`
react + redux + webpack + react-router + ES6/7/8 + fetch

### `运行方式`
git clone https://github.com/xiaoqingrong/elmproject.git

cd elmproject

npm install 或 yarn(推荐)

npm start

### `说明`

本项目主要用于理解 react 和 redux 的编译方式，以及 react + redux 之间的配合方式

如果觉得不错的话，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

或者您可以 "follow" 一下，我会不断开源更多的有趣的项目

如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎 PR 👍

推荐一个 vue2 + vuex 构建的 45 个页面的大型开源项目。[地址在这里](https://github.com/bailicangdu/vue2-elm)

另外一个 vue2 + vuex 的简单项目，非常适合入门练习。[地址在这里](https://github.com/bailicangdu/vue2-happyfri)


### `部分截图`
![main](https://github.com/xiaoqingrong/elmproject/blob/master/src/assets/projectImg/main.png)
![city](https://github.com/xiaoqingrong/elmproject/blob/master/src/assets/projectImg/city.png)
![mainindex](https://github.com/xiaoqingrong/elmproject/blob/master/src/assets/projectImg/mainindex.png)
![food](https://github.com/xiaoqingrong/elmproject/blob/master/src/assets/projectImg/food.png)
![list](https://github.com/xiaoqingrong/elmproject/blob/master/src/assets/projectImg/list.png)
![serch](https://github.com/xiaoqingrong/elmproject/blob/master/src/assets/projectImg/search.png)

### `目录`
![item](https://github.com/xiaoqingrong/elmproject/blob/master/src/assets/projectImg/item.png)


### `个人总结`
（1）组件：建议把每个页面分成多个组件来组成，复用性高一点，页面干净利落一点。
（2）性能：减少组件render次数，可以使用生命周期钩子 shouldComponentUpdate(prevProps, prevState)来返回一个布尔值，当返回值为 true 时才会触发 render。
（3）redux:action、reducer、store三个文件，使用combineReducers，applyMiddleware等来实现更多操作。
（4）数据获取封装:数据请求封装要综合考虑，复用简单快捷，本项目使用的是fetch，建议还是使用axios封装好的，可以follow" 一下，这个我有的，我也会没事多做一些实用的东西给大家。
### `个人声明`
本人不是大神，如果代码有问题，Issues 中提，可以互相交流，不喜勿喷，谢谢。
