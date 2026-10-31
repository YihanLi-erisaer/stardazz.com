import { createServer } from '../../screator/desktop/node_modules/vite/dist/node/index.js'
import react from '../../screator/desktop/node_modules/@vitejs/plugin-react/dist/index.js'
import { fileURLToPath } from 'node:url'

const server = await createServer({
  root: fileURLToPath(new URL('../../screator/desktop/', import.meta.url)),
  cacheDir: fileURLToPath(new URL('./screator-vite-cache', import.meta.url)),
  configFile: false,
  plugins: [react()],
  server: { host: '127.0.0.1', port: 1426, strictPort: true },
  clearScreen: false,
})
await server.listen()
server.printUrls()
