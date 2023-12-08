const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


const carCards = document.querySelectorAll('.sec3>.carousal>.card')
const dots = document.querySelectorAll('.sec3>.dotsContainer>ul>li>span')

dots[0].addEventListener('click',()=>{
  carCards[0].style.top = '0%'
  carCards[1].style.top = '100%'
  carCards[2].style.top = '100%'
  carCards[3].style.top = '100%'
})
dots[1].addEventListener('click',()=>{
  carCards[1].style.top = '0%'
  carCards[0].style.top = '100%'
  carCards[2].style.top = '100%'
  carCards[3].style.top = '100%'
})
dots[2].addEventListener('click',()=>{
  carCards[2].style.top = '0%'
  carCards[0].style.top = '100%'
  carCards[1].style.top = '100%'
  carCards[3].style.top = '100%'
})
dots[3].addEventListener('click',()=>{
  carCards[3].style.top = '0%'
  carCards[0].style.top = '100%'
  carCards[1].style.top = '100%'
  carCards[2].style.top = '100%'
})