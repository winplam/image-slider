const ImageSlider = (images, captions) => {
  /* Generate all the HTML for the sliders */
  const slideHTML = () => {
    let slides = []
    const parentDiv = document.getElementById('slideshow-container')

    const generateSlide = (image, caption, index, total) => {
      let frag = document.createRange().createContextualFragment(`    
    <div class="slide fade">
        <div class="pagination">${index} / ${total}</div>
        <img src="img/${image}">
        <div class="caption">${caption}</div>
    </div>
`)
      return frag
    }

    images.forEach((image, index) => {
      slides.push(
        generateSlide(image, captions[index], index + 1, images.length))
    })
    slides.forEach(slide => {parentDiv.appendChild(slide)})

    const dotsContainer = document.getElementById('dots-container')
    for (let i = 0; i < slides.length; i += 1) {
      const dot = document.createElement('span')
      dot.className = 'dots'
      dotsContainer.appendChild(dot)
    }
    return slides.length
  }
  const numSlides = slideHTML()

  /* Add event listeners to change slides and display active image */
  const slideControl = () => {
    let slideIndex = 1
    document.getElementById('prev')
      .addEventListener('click', () => {rotateSlide(slideIndex -= 1)})
    document.getElementById('next')
      .addEventListener('click', () => {rotateSlide(slideIndex += 1)})
    const dots = document.querySelectorAll('.dots')
    dots.forEach((dot, index) => dot.addEventListener('click', () => {
      console.log('slideIndex: ' + slideIndex + ' index: ' + index)
      rotateSlide(slideIndex = index + 1)
    }))

    const rotateSlide = (index) => {
      console.log('slideNumber passed ' + index)
      const slides = document.querySelectorAll('.slide')
      let dots = document.querySelectorAll('.dots')
      if (index > slides.length) {slideIndex = 1}
      if (index < 1) {slideIndex = slides.length}
      slides.forEach(slide => {slide.style.display = 'none'})
      dots.forEach(dot => {dot.classList.remove('active')})
      slides[slideIndex - 1].style.display = 'block'
      dots[slideIndex - 1].classList.add('active')
    }
    rotateSlide()

    const showSlide = (slideNumber) => {
      rotateSlide(slideIndex = slideNumber)
    }
    return { showSlide }
  }
  slideControl()

  /* Auto rotate slides every few seconds */
  const autoAdvance = (iterations, seconds) => {
    let slideCounter = 2
    const timer = () => {
      slideControl().showSlide(slideCounter % numSlides)
      if (slideCounter === iterations) clearInterval(slideInterval)
      slideCounter += 1
    }
    const slideInterval = setInterval(timer, seconds * 1000) // 1000ms = 1 second
  }
  autoAdvance(numSlides + 1, 2)
}
export { ImageSlider }
