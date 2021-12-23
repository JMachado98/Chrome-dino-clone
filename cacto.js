import { setPropriedade, incrementarPropriedade, getPropriedade } from "./updatePropriedades.js"

const SPEED = .05
const CACTO_INTERVALO_MIN = 500
const CACTO_INTERVALO_MAX = 2000
const worldElem = document.querySelector("[data-world]")

let tempoProxCacto
export function setCacto() {
    tempoProxCacto = CACTO_INTERVALO_MIN
}

export function updateCacto(delta, velScale) {
    document.querySelectorAll("[data-cacto]").forEach(cacto => {
        incrementarPropriedade(cacto, "--left", delta * velScale * SPEED * -1)
        if(getPropriedade(cacto, "--left") <= -100)
        cacto.remove
    })

    if(tempoProxCacto <= 0) {
        criarCacto()
        tempoProxCacto = randomNumberBetween(
            CACTO_INTERVALO_MIN, CACTO_INTERVALO_MAX
        ) / velScale
    }
    tempoProxCacto -= delta 
}

function criarCacto() {
    const cacto = document.createElement("img")
    cacto.dataset.cacto = true
    cacto.src = "imgs/cactus.png"
    cacto.classList.add("cacto")
    setPropriedade(cacto, "--left", 1)
    worldElem.append(cacto)
}

function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

