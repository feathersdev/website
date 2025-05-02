// import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // antfu().override('antfu/node/rules', {
  //   rules: {
  //     'node/prefer-global/buffer': 'off',
  //     'curly': ['error', 'all'],
  //     'brace-style': ['error', 'stroustrup', { allowSingleLine: false }],
  //     'unused-imports/no-unused-vars': ['error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_', caughtErrors: 'none' }],
  //   },
  // }),
)
