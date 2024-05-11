import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: true,
  react: true,

  rules: {
    'react-refresh/only-export-components': 'off',
  },
})
