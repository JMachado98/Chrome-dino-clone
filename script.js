import { updateGround, setGround } from './ground.js'
import { updateDino, setDino } from './dino.js'
import { updateCacto, setCacto } from './cacto.js'

const WORLD_WIDTH = 100
const WORLD_HEIGHT = 30
const SPEED_SCALE_INCREASE = 0.00001

const worldElem = document.querySelector("[data-world]");
const pontosElem = document.querySelector("[data-pontos]");
const startElem = document.querySelector("[data-start]");

setPixelWorldScale()
window.addEventListener("resize", setPixelWorldScale)
document.addEventListener("keydown", iniciar, { once: true}) 

let lastTime
let velScale
let pontos
function update (time) {
    if (lastTime == null) {
        lastTime = time
        window.requestAnimationFrame(update)
        return
    }
    const delta = time - lastTime

    updateGround(delta, velScale)
    updateDino(delta, velScale)
    updateVelScale(delta)
    updatePontosScale(delta, pontos)
    updateCacto(delta, velScale)

    lastTime = time
    window.requestAnimationFrame(update)
}

function updateVelScale(delta) {
    velScale += delta * SPEED_SCALE_INCREASE
}

function updatePontosScale(delta){
    pontos += delta * .01
    pontosElem.textContent = Math.floor(pontos)
}

function iniciar() {
    lastTime = null
    velScale = 1
    pontos = 0
    setGround()
    setDino()
    setCacto()
    startElem.classList.add("hide")
    window.requestAnimationFrame(update)
}

function setPixelWorldScale() {
    let worldPixelScale
    if (window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
        worldPixelScale = window.innerWidth / WORLD_WIDTH
    } else {
        worldPixelScale = window.innerHeight / WORLD_HEIGHT
    }

    worldElem.style.width = `${WORLD_WIDTH * worldPixelScale}px`
    worldElem.style.height = `${WORLD_HEIGHT * worldPixelScale}px`
}