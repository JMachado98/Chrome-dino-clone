export function getPropriedade(elem, prop) {
    return parseFloat(getComputedStyle(elem).getPropertyValue(prop)) || 0
}

export function setPropriedade(elem, prop, value) {
    elem.style.setProperty(prop, value)
}

export function incrementarPropriedade(elem, prop, inc) {
    setPropriedade(elem, prop, getPropriedade(elem, prop) + inc)
}