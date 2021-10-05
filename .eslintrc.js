module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: { project: './tsconfig.json' },
  plugins: ['@typescript-eslint', 'react-hooks'],
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 0,
    'import/no-cycle': 0,
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['state'] },
    ],
    'no-loop-func': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-key': 0,
    'react/require-default-props': 0,
    'react/no-array-index-key': 0,
    'no-inner-declarations': 0,
    'no-alert': 0,
    'no-use-before-define': ['error', { functions: false, variables: false }],
    '@typescript-eslint/no-use-before-define': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
