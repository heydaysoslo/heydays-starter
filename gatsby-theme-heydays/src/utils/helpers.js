export const setOverflowHidden = state => {
  document.body.style.overflow = state ? 'hidden' : ''
  // document.querySelector('html').style.overflow = state ? 'hidden' : ''
}
