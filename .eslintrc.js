module.exports = {
  root: true,

  extends: ['contactlab/typescript', 'prettier/@typescript-eslint'],

  env: {
    jest: true
  },

  rules: {
    // --- TypeScript
    '@typescript-eslint/ban-types': 'off' // FIXME: https://github.com/microsoft/TypeScript/issues/21732
    // '@typescript-eslint/ban-types': [
    //   'error',
    //   {
    //     types: {
    //       '{}': false
    //     },
    //     extendDefaults: true
    //   }
    // ]
  },

  overrides: [
    {
      // --- Disable TypeScript rules for tests files
      files: ['*.spec.ts*'],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off'
      }
    }
  ]
};
