import * as THREE from "three";
import { sizes } from "./constants";

// Light 
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 20

export default camera