const mario = document.querySelector(".mario")
const pipe = document.querySelector(".pipe")
const nuvem = document.querySelector(".nuvem")



const jump = ()=> {
    mario.classList.add("jump")
    setTimeout(() => {
        mario.classList.remove("jump")
    },500)
}

const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px","")
    const nuvemPosition = nuvem.offsetLeft

    console.log(loop)

    if (pipePosition <= 120 && pipePosition >0 && marioPosition < 80) {
        // parando o pipe
        pipe.style.animation = "none"
        pipe.style.left = `${pipePosition}px`
        // parando o mario
        mario.style.animation = "none"
        mario.style.bottom = `${marioPosition}px`
        mario.src = "img/game-over.png"
        mario.style.width ="75px"
        mario.style.marginLeft ="50px"
        // parando as nuvens
        nuvem.style.animation = "none"
        nuvem.style.left = `${nuvemPosition}px`
        clearInterval(loop)
    }
},10)
document.addEventListener("keydown",jump)

