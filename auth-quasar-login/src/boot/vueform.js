import { boot } from 'quasar/wrappers'
import Vueform from '@vueform/vueform'
import vueformConfig from './vueform.config'

export default boot(({ app }) => {
  app.use(Vueform, vueformConfig)
})
