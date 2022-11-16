import type { Plugin } from 'vite'
import { setDevProxy, transformIndexHtml } from './devEnvProxy'

interface UserOptions {
  devServer?: string
  project?: string
  ssl?: boolean
}

export default function thingjsPlugin(userOptions?: UserOptions): Plugin {
  return {
    name: 'vite-plugin-thingjs',
    configResolved(config) {
      if (!userOptions) {
        return
      }
      const { devServer = '', project = '', ssl = false } = userOptions
      const devProxy = setDevProxy(devServer, project, ssl)
      config.server.proxy = {
        ...config.server?.proxy,
        ...devProxy,
      }
    },
    transformIndexHtml,
  }
}
