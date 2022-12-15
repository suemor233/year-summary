import { gsap } from 'gsap'

class GsapPlugins {
  private _plugins: []
  constructor() {
    this._plugins = []
  }

  register(plugin) {
    this._plugins = plugin
  }


  registerAndRun(plugin) {
    this._plugins = plugin
    this.runAsyncWaterfall()
  }

  runAsyncWaterfall() {
    this._plugins.map((plugin) => gsap.registerPlugin(plugin))
  }
}

export const gsapPlugins = new GsapPlugins()
