import * as THREE from "three"
import camera from "./camera"
import light from "./light"
import mesh from "./mesh"

// scene
const scene = new THREE.Scene()

// Add our sphere
scene.add(mesh)

// Light 
scene.add(light)

// Camera
scene.add(camera)

export default scene