import LazyLoad from 'vanilla-lazyload'

let lazyload = {
  init() {
    new LazyLoad({
      threshold: 0,
      cancel_on_exit: true,
      elements_selector: 'img.is-lazy-js'
    })
  }
}

export default lazyload
