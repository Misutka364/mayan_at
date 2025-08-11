let block = document.querySelector('.title')
document.addEventListener('mousemove', function(e) {
    let dx = e.pageX - window.innerWidth / 2
    let dy = e.pageY - window.innerHeight / 2
    let angleX = 90 * dx / window.innerWidth / 2
    let angleY = 90 * dy / window.innerHeight / 2
    block.style.transform = `rotateX(${-angleY}deg) rotateY(${angleX}deg)`
})