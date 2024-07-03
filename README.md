# Midjourney Proxy

**开发进行中，即将发布正式版，敬请期待！**

Midjourney api 的 C# 版本。

完全开源，不会存在部分开源或闭源的可能，欢迎 PR。

## 主要功能
- [x] 支持 Imagine 指令和相关动作
- [x] Imagine 时支持添加图片base64，作为垫图
- [x] 支持 Blend(图片混合)、Describe(图生文) 指令
- [x] 支持任务实时进度
- [x] 支持中文prompt翻译，需配置百度翻译或gpt
- [x] prompt 敏感词预检测，支持覆盖调整
- [x] user-token 连接 wss，可以获取错误信息和完整功能
- [x] 支持多账号配置，每个账号可设置对应的任务队列
- [x] 支持 Shorten(prompt分析) 指令
- [x] 支持焦点移动: Pan ⬅️ ➡️ ⬆️ ⬇️
- [x] 支持图片变焦: Zoom 🔍
- [x] 支持局部重绘: Vary (Region) 🖌
- [x] 支持几乎所有的关联按钮动作和🎛️ Remix模式
- [x] 支持获取图片的seed值
- [x] 账号池持久化，动态维护
- [x] 支持获取账号/info、/settings信息
- [x] 账号settings设置
- [x] 支持niji bot机器人
- [ ] 支持 InsightFace人脸替换机器人
- [ ] 内嵌管理后台页面

## 配置项
- mj.accounts: 参考 [账号池配置](./docs/config.md#%E8%B4%A6%E5%8F%B7%E6%B1%A0%E9%85%8D%E7%BD%AE%E5%8F%82%E8%80%83)
- mj.task-store.type: 任务存储方式，默认in_memory(内存\重启后丢失)，可选redis
- mj.task-store.timeout: 任务存储过期时间，过期后删除，默认30天
- mj.api-secret: 接口密钥，为空不启用鉴权；调用接口时需要加请求头 mj-api-secret
- mj.translate-way: 中文prompt翻译成英文的方式，可选null(默认)、baidu、gpt
- 更多配置查看 [配置项](./docs/config.md)

## 相关文档
1. [API接口说明](./docs/api.md)
2. [版本更新记录](https://github.com/novicezk/midjourney-proxy/wiki/%E6%9B%B4%E6%96%B0%E8%AE%B0%E5%BD%95)

## 注意事项
1. 作图频繁等行为，可能会触发midjourney账号警告，请谨慎使用

## 其它
如果觉得这个项目对您有所帮助，请帮忙点个star