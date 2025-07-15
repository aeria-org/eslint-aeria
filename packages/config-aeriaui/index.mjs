import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import { deepMerge } from '@aeriajs/common'
import parserVue from 'vue-eslint-parser'
import parserTs from '@typescript-eslint/parser'
import { srcRules } from '@eslint-aeria/config'

const eslintrc = new FlatCompat({
  baseDirectory: fileURLToPath(import.meta.resolve('.')),
})

const aeriaUiConfig = deepMerge(srcRules, {
  languageOptions: {
    parser: parserVue,
    parserOptions: {
      parser: parserTs,
      extraFileExtensions: [
        '.vue',
      ]
    },
  },
  files: [
    '**/*.vue',
  ],
  rules: {
    'style/indent': 0
  }
})

export default [].concat(
  eslintrc.plugins('vue'),
  eslintrc.extends('plugin:vue/recommended'),
  aeriaUiConfig,
  {
    rules: {
      'vue/require-default-prop': 0,
      'vue/multi-word-component-names': 0,
      'vue/no-dupe-keys': 0,
      'vue/no-mutating-props': ['error', {
        shallowOnly: true
      }],
      'vue/no-v-html': 0,
    }
  },
  {
    files: [
      'src/components/**/*.vue'
    ],
    rules: {
      'vue/multi-word-component-names': 'error'
    }
  }
)

