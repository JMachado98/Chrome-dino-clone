import { incrementarPropriedade, setPropriedade, getPropriedade } from "./updatePropriedades.js"

const groundElems = document.querySelectorAll("[data-ground]")

const VEL = 0.05

export function setGround() {
    setPropriedade(groundElems[0], "--left", 0)
    setPropriedade(groundElems[1], "--left", 300)
}

export function updateGround(delta) {
    groundElems.forEach(ground => {
        incrementarPropriedade(ground, "--left", delta * VEL * -1)

        if(getPropriedade(ground, "--left") <= -300) {
            incrementarPropriedade(ground, "--left", 600)
        }
    })
}