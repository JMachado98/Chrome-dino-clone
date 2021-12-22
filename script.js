const world_width = 100
const world_height = 30

const worldElem = document.querySelector(['data-world']);

pixelWorldScale()
window.addEventListener("resize", pixelWorldScale) 

function pixelWorldScale() {
    let worldPixelScale
    if (window.innerWidth / window.innerHeight < world_width / world_height) 
    {
        worldPixelScale = window.innerWidth / world_width
    } else 
    {
        worldPixelScale = window.innerHeight / world_height
    }

    worldElem.style.width = `${world_width * worldPixelScale}px`
    worldElem.style.height = `${world_height * worldPixelScale}px`
}