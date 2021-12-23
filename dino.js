import { incrementarPropriedade, getPropriedade, setPropriedade } from "./updatePropriedades.js"

const dinoElem = document.querySelector("[data-dino]")
const JUMP_SPEED = .4 
const GRAVIDADE = 0.0015
const DINO_FRAME_COUNT = 2
const FRAME_TIME = 100

let isJumping
let dinoFrame
let currentFrameTime
let yVel
export function setDino() {
    isJumping = false
    dinoFrame = 0
    currentFrameTime = 0
    yVel = 0
    setPropriedade(dinoElem, "--bottom", 0)
    document.removeEventListener("keydown", onJump)
    document.addEventListener("keydown", onJump)
}

export function updateDino(delta, velScale) {
    handleRun(delta, velScale)
    handleJump(delta)
}

function handleJump(delta) {
    if(!isJumping) return

    incrementarPropriedade(dinoElem, "--bottom", yVel * delta)
    
    if(getPropriedade(dinoElem, "--bottom") <= 0) {
        setPropriedade(dinoElem, "--bottom", 0)
        isJumping = false
    }

    yVel -= GRAVIDADE * delta
}

function onJump(e) {
    if(e.code !== "Space" || isJumping) return

    yVel = JUMP_SPEED
    isJumping = true
}

function handleRun(delta, velScale) {
    if(isJumping) {
        dinoElem.src = `imgs/dino-stationary.png`
        return
    }
    if(currentFrameTime >= FRAME_TIME) {
        dinoFrame = (dinoFrame + 1) % DINO_FRAME_COUNT
        dinoElem.src = `imgs/dino-run-${dinoFrame}.png`
        currentFrameTime -= FRAME_TIME
    }
    currentFrameTime += delta * velScale
}

