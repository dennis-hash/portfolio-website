import { Component, OnInit, ElementRef,AfterViewInit, ViewChild,OnDestroy, Input } from '@angular/core';
import {
  AnimationMixer,
  Clock,
  Color,
  DirectionalLight,
  HemisphereLight,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  Scene,
  Vector3,
  WebGLRenderer
} from 'three';

import * as THREE from 'three';
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';


@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss']
})

export class AnimationComponent implements OnInit{
  @ViewChild('canvas', { static: true }) canvasRef?: ElementRef;

  scene!: THREE.Scene;
  camera!: THREE.PerspectiveCamera;
  renderer!: THREE.WebGLRenderer;
  controls!: OrbitControls;

  constructor() { }

  ngOnInit(): void {
    this.initScene();
    this.loadModel();
    this.render();
  }

  initScene() {
    // Create scene
    this.scene = new THREE.Scene();
   
    this.scene.background = new THREE.Color(0xF0E7DB);

    //const material = new THREE.MeshToonMaterial();

    // Create camera
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(5, 4, 5);

    // Create renderer
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvasRef?.nativeElement,antialias: true });
    this.renderer.setSize(window.innerWidth * 0.4, window.innerHeight * 0.5);
    this.renderer.setClearColor(0xffffff);

    // Create controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.update();

    // Add lights
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 0); // Adjust light position as needed
    directionalLight.castShadow = false;
    this.scene.add(directionalLight);



    const ambientLight = new THREE.AmbientLight(0xcccccc, 1); // Adjust intensity as needed
    ambientLight.castShadow = false; 
    this.scene.add(ambientLight);

    // this.renderer = new THREE.WebGLRenderer({ canvas: this.canvasRef?.nativeElement, antialias: true });
    // this.renderer.setSize(window.innerWidth, window.innerHeight);
    // this.renderer.setClearColor(0xffffff);

    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x000000, 0.1);
    hemisphereLight.castShadow = false;
    this.scene.add(hemisphereLight);
  }

  loadModel() {
    // Create loader
    const loader = new GLTFLoader();

    // Load model
    loader.load(
      'assets/newgltf.gltf',
      (gltf) => {
        // Add loaded model to the scene
        gltf.scene.scale.set(1, 1, 1);
        this.scene.add(gltf.scene);
      },
      undefined,
      (error) => {
        console.error('Error loading model', error);
      }
    );
  }

  render() {
    const animate = () => {
      requestAnimationFrame(animate);
      this.scene.rotation.y += 0.01;
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
    };
    animate();
  }
}
  





