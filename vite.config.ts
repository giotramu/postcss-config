import { defineConfig } from 'vitest/config'

const isCi = (process.env.CI ?? 'false') === 'true'

export default defineConfig({
  test: {
    coverage: {
      reporter: isCi
        ? [['lcov', { projectRoot: './src' }]]
        : ['text', 'html', 'json']
    },
    typecheck: {
      tsconfig: './tsconfig.test.json'
    }
  }
})
