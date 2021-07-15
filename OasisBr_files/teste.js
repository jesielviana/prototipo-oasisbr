console.log('before loaded')
document.addEventListener('DOMContentLoaded', () => {
  console.log('loaded')
  const h2s = document.getElementsByTagName('h2')
  Array.from(h2s).forEach(h2 => {
    h2.addEventListener('click', () => {
      console.log(h2.textContent)
    })
  })
})
console.log('after loaded')
