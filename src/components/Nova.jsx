import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { useEffect, useState } from "react";
const Nova = () => {
  useEffect(() => {
    let isMobile = false;
    if(window.innerWidth < 768) isMobile = true;
    const len = document.querySelectorAll("canvas[data-engine]")?.length;
    if (len > 0) return;
    let scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf7f7f7);
    let camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.set(0, 2, 30);
    let renderer = new THREE.WebGLRenderer();
    if(isMobile) renderer.setSize(window.innerWidth, window.innerHeight);
    else renderer.setSize(window.innerWidth, window.innerHeight);
    const novaDiv = document.getElementById("nova");
    novaDiv.appendChild(renderer.domElement);
    window.addEventListener("resize", (event) => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      if(isMobile) renderer.setSize(window.innerWidth, window.innerHeight);
      else renderer.setSize(window.innerWidth, window.innerHeight);
    });

    let controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;
    let gu = {
      time: { value: 0 },
    };

    let sizes = [];
    let shift = [];
    let pushShift = () => {
      shift.push(
        Math.random() * Math.PI,
        Math.random() * Math.PI * 2,
        (Math.random() * 0.9 + 0.1) * Math.PI * 0.1,
        Math.random() * 0.9 + 0.1
      );
    };
    let pts = new Array(isMobile ? 2000 : 5000).fill().map((p) => {
      sizes.push(Math.random() * 1.5 + 0.5);
      pushShift();
      return new THREE.Vector3()
        .randomDirection()
        .multiplyScalar(Math.random() * 0.5 + 7.5);
    });
    for (let i = 0; i < 2000; i++) {
      let r = 10,
        R = 30;
      let rand = Math.pow(Math.random(), 1.5);
      let radius = Math.sqrt(R * R * rand + (1 - rand) * r * r);
      pts.push(
        new THREE.Vector3().setFromCylindricalCoords(
          radius,
          Math.random() * 2 * Math.PI,
          (Math.random() - 0.5) * 2
        )
      );
      sizes.push(Math.random() * 1.5 + 0.5);
      pushShift();
    }

    let g = new THREE.BufferGeometry().setFromPoints(pts);
    g.setAttribute("sizes", new THREE.Float32BufferAttribute(sizes, 1));
    g.setAttribute("shift", new THREE.Float32BufferAttribute(shift, 4));
    let m = new THREE.PointsMaterial({
      size: 0.125,
      transparent: true,
      depthTest: false,
      onBeforeCompile: (shader) => {
        shader.uniforms.time = gu.time;
        shader.vertexShader = `
        uniform float time;
        attribute float sizes;
        attribute vec4 shift;
        varying vec3 vColor;
        ${shader.vertexShader}
      `
          .replace(`gl_PointSize = size;`, `gl_PointSize = size * sizes;`)
          .replace(
            `#include <color_vertex>`,
            `#include <color_vertex>
          float d = length(abs(position) / vec3(40., 10., 40));
          d = clamp(d, 0., 1.);
          vColor = mix(vec3(0., 0., 0.), vec3(0., 0., 0.), d) / 255.;
        `
          )
          .replace(
            `#include <begin_vertex>`,
            `#include <begin_vertex>
          float t = time;
          float moveT = mod(shift.x + shift.z * t, PI2);
          float moveS = mod(shift.y + shift.z * t, PI2);
          transformed += vec3(cos(moveS) * sin(moveT), cos(moveT), sin(moveS) * sin(moveT)) * shift.w;
        `
          );
        //console.log(shader.vertexShader);
        shader.fragmentShader = `
        varying vec3 vColor;
        ${shader.fragmentShader}
      `
          .replace(
            `#include <clipping_planes_fragment>`,
            `#include <clipping_planes_fragment>
          float d = length(gl_PointCoord.xy - 0.5);
          //if (d > 0.5) discard;
        `
          )
          .replace(
            `vec4 diffuseColor = vec4( diffuse, opacity );`,
            `vec4 diffuseColor = vec4( vColor, smoothstep(0.5, 0.1, d)/* * 0.5 + 0.5*/ );`
          );
        //console.log(shader.fragmentShader);
      },
    });
    let p = new THREE.Points(g, m);
    p.rotation.order = "ZYX";
    p.rotation.z = 0.2;
    scene.add(p);

    let clock = new THREE.Clock();

    renderer.setAnimationLoop(() => {
      controls.update();
      let t = clock.getElapsedTime() * 0.5;
      gu.time.value = t * Math.PI;
      p.rotation.y = t * 0.05;
      renderer.render(scene, camera);
    });
  }, []);

  return <div id="nova" className="nova"></div>;
};
export default Nova;
