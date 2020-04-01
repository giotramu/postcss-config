module.exports = {
  root: true,
  extends: ['contactlab/typescript', 'prettier'],

  env: {
    jest: true
  },

  rules: {
    'import/order': 'off'
  }
};
