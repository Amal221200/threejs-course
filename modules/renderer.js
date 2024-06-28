import * as THREE from "three"
import { sizes, canvas } from "./constants"
import camera from "./camera"
import scene from "./scene"

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas })

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(2)
renderer.render(scene, camera)

export default renderer