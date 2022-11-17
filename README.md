## Low-Code Engine Demo

本 demo 是一个组合内核、setter、插件、物料的示范工程，因为未经长期生产环境打磨，可能还会有一些各个模块间结合的 bug，希望大家理解~

场景列表：

- [index](https://lowcode-engine.cn/demo/index.html)
- [basic-fusion](https://lowcode-engine.cn/demo/basic-fusion.html)（此 fusion 的元数据描述是很老的版本，只为了示意描述结构，请勿用于生产环境）
- [basic-antd](https://lowcode-engine.cn/demo/basic-antd.html)
- [basic-fusion-with-single-component](https://lowcode-engine.cn/demo/basic-fusion-with-single-component.html)
- [custom-initialization](https://lowcode-engine.cn/demo/custom-initialization.html)
- [node-extended-actions](https://lowcode-engine.cn/demo/node-extended-actions.html)
- [next-pro](https://lowcode-engine.cn/demo/next-pro.html)
- [antd-pro-with-formily](https://lowcode-engine.cn/demo/antd-pro-with-formily.html)

更多参考资料：

- [马上玩一下](https://lowcode-engine.cn/demo/index.html)
- [低代码引擎官网](http://lowcode-engine.cn)
- [引擎主包](https://github.com/alibaba/lowcode-engine)

## ----------------分割线----------------

## 现有问题记录

### 入料

- Max组件做为物料需要改造(插件改造)
- 物料需要支持样式开发(具体支持哪些样式待验证/开发)
- 自定义组件暂时无法基于lowcode-engine进行预览

### 编排

- 拖动组件时有bug，例如：拖动一次组件后无法二次拖动

### 预览

- 预览画布按照PC网页方式展示，期望按照手机屏幕展示
- PC网页展示与手机屏幕展示效果有出入
- 预览Demo使用的是Page但是Rax中没有Page，需要将Page换成View，同时也带出其它问题，需要根据源码排查问题

### 出码

- 出码需要自定义插件，目前出码方式不符合预期
- 因为小程序使用内联样式有性能问题，需要出码时将样式转换成classname形式
