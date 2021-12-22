import {updateGround} from './ground'

const WORLD_WIDTH = 100
const WORLD_HEIGHT = 30

const worldElem = document.querySelector("[data-world]");

setPixelWorldScale()
window.addEventListener("resize", setPixelWorldScale) 

let lastTime
function update (time) {
    if (lastTime == null) {
        lastTime = time
        window.requestAnimationFrame(update)
        return
    }
    const delta = time - lastTime

    updateGround(delta)

    lastTime = time
    window.requestAnimationFrame(update)
}
window.requestAnimationFrame(update)

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