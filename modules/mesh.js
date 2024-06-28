import * as THREE from "three";

// Create our sphere
const geometry = new THREE.SphereGeometry(3, 64, 64)
const material = new THREE.MeshStandardMaterial({
  color: '#00ff83',
  roughness: 0.3
})

const mesh = new THREE.Mesh(geometry, material)

export default mesh