const onFocusFns = []
const onBlurFns = []

export const onFocus = fn => onFocusFns.push(fn)
export const onBlur = fn => onBlurFns.push(fn)

window.addEventListener('focus', event => {
  onFocusFns.forEach(fn => fn(event))
})

window.addEventListener('blur', event => {
  onBlurFns.forEach(fn => fn(event))
})
