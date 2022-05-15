const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify',
  ],
  // vue multi-word-component-names 오류 해결위해 설정
  lintOnSave:false
})
