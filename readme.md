# vite-plugin-thingjs

[![NPM version](https://img.shields.io/npm/v/vite-plugin-thingjs?color=a1b858)](https://www.npmjs.com/package/vite-plugin-thingjs)

实现ThingJS离线开发网络版本地开发调试的vite插件

## 安装

```bash
pnpm add -D vite-plugin-thingjs
```

添加插件到 `vite.config.ts`:

```ts
// vite.config.ts
import thingJS from 'vite-plugin-thingjs'

export default {
  plugins: [
    thingJS({
      devServer: '',
      project: '',
      ssl: true,
    }),
  ],
}
```

## 配置项

### devServer

- **Type:** `string`
- **Required:** `true`

ThingJS离线开发网络版开发服务器访问地址

### project

- **Type:** `string`
- **Required:** `true`

项目编号，ThingJS离线开发网络版开发服务器管理页面查看

### ssl

- **Type:** `boolean`
- **Required:** `false`

开发服务器是否开启ssl

## License

[MIT](./LICENSE) License © 2022 [Karasu Shin](https://github.com/karasushin)
