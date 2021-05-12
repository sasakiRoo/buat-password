const container = document.querySelector('.container')

for (let i = 0; i < 100 ; ++i){
    const boxes = document.createElement('div')
    boxes.classList.add('boxes')
    container.appendChild(boxes)
}

function animasi(){
    anime({
        targets: '.boxes',
        translateX: function(){
            return anime.random(-800, 800)
        },
        translateY: function(){
            return anime.random(-500, 500)
        },
        scale: function(){
            return anime.random(1, 5)
        },

        easing: 'linear',
        duration: 3000,
        delay: anime.stagger(10),
        complete: animasi
    })
}
animasi()
