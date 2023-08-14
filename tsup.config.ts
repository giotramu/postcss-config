import { defineConfig } from 'tsup'

const ENTRIES = {
  main: './src/main.ts',
  extends: './src/extends.ts'
}

const OUT_DIR = './lib'

const config: Config = {
  dts: true,
  clean: false,
  outDir: OUT_DIR,
  entry: ENTRIES,
  format: ['cjs', 'esm'],
  target: 'es2020',
  platform: 'node',
  sourcemap: false,
  splitting: false
}

// eslint-disable-next-line no-restricted-exports
export default defineConfig(config)

// --- Types
type Config = ReturnType<typeof defineConfig>
