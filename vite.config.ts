import { defineConfig } from 'vitest/config'

const isCi = (process.env.CI ?? 'false') === 'true'

export const viteConfig = defineConfig({
  test: {
    coverage: {
      reporter: isCi
        ? [['lcov', { projectRoot: './src' }]]
        : ['text', 'html', 'json']
    },
    typecheck: {
      tsconfig: './tsconfig.json'
    }
  }
})

// eslint-disable-next-line no-restricted-exports
export default viteConfig
