import { OrbitControls } from "three/examples/jsm/Addons.js"
import camera from "./camera"
import { canvas } from "./constants"

const orbitControls = new OrbitControls(camera, canvas)
orbitControls.enableDamping = true
orbitControls.enablePan = false
orbitControls.enableZoom = false
orbitControls.autoRotate = true
orbitControls.autoRotateSpeed = 5

export default orbitControls