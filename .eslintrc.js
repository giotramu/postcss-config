module.exports = {
  root: true,
  extends: ['contactlab/typescript', 'prettier'],

  env: {
    jest: true
  },

  overrides: [
    // --- disable typescript rules for tests files
    {
      files: ['*.spec.ts*', '*.e2e.ts*'],
      rules: {
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off'
      }
    }
  ]
};
