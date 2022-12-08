import type { Plugin } from 'vite'
import { setDevProxy, transformIndexHtml } from './devEnvProxy'

interface UserOptions {
  devServer?: string
  project?: string
  ssl?: boolean
  authUrl?: string
  offline?: boolean
}

export default function thingjsPlugin(userOptions: UserOptions = {}): Plugin {
  const { devServer = '', project = '', ssl = false, authUrl, offline } = userOptions
  return {
    name: 'vite-plugin-thingjs',
    configResolved(config) {
      if (!userOptions) {
        return
      }
      const devProxy = setDevProxy(devServer, project, ssl)
      if (!offline) {
        config.server.proxy = {
          ...config.server?.proxy,
          ...devProxy,
        }
      }
    },
    transformIndexHtml: () => transformIndexHtml(authUrl ?? offline ? '/auth/processRequest' : '/thingjsRoot/auth/processRequest'),
  }
}
