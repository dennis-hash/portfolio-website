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
import { ThemeService } from '../shared/theme.service';

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

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.initScene();
    this.loadModel();
    this.render();

    this.themeService.getDarkTheme().subscribe(isDarkTheme => {
      this.onThemeToggled(isDarkTheme);
    });
  }

  initScene() {
    // Create scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xF0E7D0); // Default background color

    // Create camera
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(5, 5, 15);

    // Create renderer
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvasRef?.nativeElement, antialias: true });
    this.renderer.setSize(window.innerWidth * 0.5, window.innerHeight * 0.7);

    // Create controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.update();

     // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9); // soft white light
    this.scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
    directionalLight.position.set(0, -1, -1); // Adjust the position as needed
    this.scene.add(directionalLight);

     // Add point light to illuminate the back
    const pointLight = new THREE.PointLight(0xffffff, 0.6, 10);
    pointLight.position.set(0, -5, -5); // Position the light to target the back side
    this.scene.add(pointLight);
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
      this.scene.rotation.y += 0.007;
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
    };
    animate();
  }

  // Method to handle theme toggling
  onThemeToggled(isDarkTheme: boolean) {
    const backgroundColor = isDarkTheme ? 0x202023 : 0xF0E7DB; 
    this.scene.background = new THREE.Color(backgroundColor);
  }
}
  





