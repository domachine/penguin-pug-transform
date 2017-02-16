'use strict'

const pug = require('pug')

module.exports = () => (
  {
    transform (source, id) {
      if (!id.match(new RegExp(`^${process.cwd()}/components/.+\\.pug$`))) return
      const pugFn = pug.compileClient(source)
      const code =
        `${pugFn}
const clone = (obj, exclude = []) => {
  const newObj = {}
  Object.keys(obj).forEach(key => {
    if (exclude.indexOf(key) === -1) newObj[key] = obj[key]
  })
  return newObj
}
export function mount (props, el) {
  const update = () => {
    const html = render(props)
    if (html !== el.innerHTML) el.innerHTML = html
  }
  if (!props.store.getState().isBuilt) props.store.subscribe(update)
  update()
}
export function render (props) {
  const locals = clone(props, ['save', 'destroy', 'store'])
  locals.fields = props.store.getState().fields
  return template(locals)
}`
      return { code, map: { mappings: '' } }
    }
  }
)
