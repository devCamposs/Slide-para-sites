const carousel = document.querySelector(".carousel")
primeiraImg = carousel.querySelectorAll("img")[0]
icone = document.querySelectorAll(".wrapper svg")

let isDragStart = false, prevPageX, prevScrollLeft
let primeiraImgWidth = primeiraImg.clientWidth + 14
// pegando a largura da primeira img e adicionando 14 de margem

icone.forEach(icon => {
  icon.addEventListener('click', ()=>{
    // se o icone clicado for deixado, conduza o valor da largura da rolagem do carrossel a esquerda, caso contrario adicione a ele
    carousel.scrollLeft += icon.id == 'left' ? -primeiraImgWidth : primeiraImgWidth
  })
})

const dragStart = (e) => {
  isDragStart = true
  prevPageX = e.pageX
  prevScrollLeft = carousel.scrollLeft
  // atualizando o valor das variáveis * no evento mouse down
}

const dragging = (e) => {
  if(!isDragStart) return
  e.preventDefault()
  carousel.classList.add('dragging')
  let positionDiff = e.pageX - prevPageX
  carousel.scrollLeft = prevScrollLeft - positionDiff
  // com o mouse movendo para o lado a imagem mostra a seguencada da direita
}

const dragStop = () => {
  isDragStart = false
  carousel.classList.remove('dragging')
}

carousel.addEventListener("mousedown", dragStart )
carousel.addEventListener("mousemove", dragging )
carousel.addEventListener("mouseup", dragStop )
