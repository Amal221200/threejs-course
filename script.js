import * as THREE from "three";
import gsap from "gsap";
import mesh from "./mesh";
import camera from "./camera";
import orbitControls from "./orbitControls";
import renderer from "./renderer";
import { sizes } from "./constants";
import scene from "./scene";

window.addEventListener('resize', () => {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()
  renderer.setSize(sizes.width, sizes.height)
})


const loop = () => {
  orbitControls.update()
  renderer.render(scene, camera)
  requestAnimationFrame(loop)
}

loop()

const tl = gsap.timeline({
  defaults: {
    duration: 1
  }
})

tl.fromTo(mesh.scale, {
  z: 0,
  x: 0,
  y: 0
}, {
  z: 1,
  x: 1,
  y: 1
})

tl.fromTo('nav', {
  y: '-100%',
}, {
  y: 0
})

tl.fromTo('.title', {
  opacity: 0,
}, {
  opacity: 1
})

// Mouse Animation
let pointerDown = false
let rgb = []
window.addEventListener('pointerdown', () => {
  pointerDown = true
})
window.addEventListener('pointerup', () => {
  pointerDown = false
})

window.addEventListener('pointermove', (e) => {
  if (pointerDown) {
    rgb = [
      Math.round((e.pageX / sizes.width) * 255),
      Math.round((e.pageY / sizes.height) * 255),
      150
    ]

    const newColor = new THREE.Color(`rgb(${rgb.join(',')})`)

    gsap.to(mesh.material.color, {
      r: newColor.r,
      g:  newColor.g,
      b: newColor.b,
    })
  }
})