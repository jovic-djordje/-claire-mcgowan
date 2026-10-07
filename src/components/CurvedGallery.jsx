import { useEffect, useRef } from "react";
import * as THREE from "three";

const vertexShader = `
  uniform float uBend;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    vec3 pos = position;

    // Normalizovana visina od centra kartice (-1.0 do 1.0)
    float normalizedY = pos.y / 125.0;

    // Parabolična 2D krivina: gornji i donji krajevi se izvijaju u smeru kretanja
    float wave = (1.0 - normalizedY * normalizedY);
    pos.x += wave * uBend * 48.0;

    // Blagi Y-lift za organski lučni oblik
    pos.y += sin(normalizedY * 3.14159) * abs(uBend) * 12.0;

    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D uTexture;
  varying vec2 vUv;

  void main() {
    vec4 color = texture2D(uTexture, vUv);
    gl_FragColor = color;
  }
`;

const CurvedGallery = ({ images = [] }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !images.length) return undefined;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight * 0.7;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.z = 600;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    const textureLoader = new THREE.TextureLoader();
    const meshes = [];

    // Tvoje dimenzije kartica i razmaci
    const cardWidth = 200;
    const cardHeight = 250;
    const gap = 12;
    const itemTotalWidth = cardWidth + gap;
    const totalTrackWidth = images.length * itemTotalWidth;

    const geometry = new THREE.PlaneGeometry(cardWidth, cardHeight, 32, 32);

    images.forEach((imgObj) => {
      const texture = textureLoader.load(imgObj.src, () => {
        renderer.render(scene, camera);
      });
      texture.generateMipmaps = false;
      texture.minFilter = THREE.LinearFilter;

      const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          uTexture: { value: texture },
          uBend: { value: 0 },
        },
        side: THREE.DoubleSide,
      });

      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      meshes.push(mesh);
    });

    // Interaction & Infinite scroll state
    let scrollPos = 0;
    let targetPos = 0;
    let isDragging = false;
    let startX = 0;
    let dragStartPos = 0;
    let lastScrollPos = 0;

    const handleWheel = (e) => {
      e.preventDefault();
      const delta =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      // Nema min/max ograničenja – rotira se unedogled
      targetPos -= delta * 1.1;
    };

    const handlePointerDown = (e) => {
      isDragging = true;
      startX = e.clientX;
      dragStartPos = targetPos;
    };

    const handlePointerMove = (e) => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      targetPos = dragStartPos + dx * 1.35;
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight * 0.7;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    let animationFrameId;

    const animate = () => {
      // Lerp fizika za mekoću pokreta
      scrollPos += (targetPos - scrollPos) * 0.075;

      const velocity = scrollPos - lastScrollPos;
      lastScrollPos = scrollPos;

      // Izračunaj silu savijanja s obzirom na brzinu
      const bendTarget = THREE.MathUtils.clamp(velocity * 0.08, -1.8, 1.8);

      // --- INFINITE WRAP-AROUND PETLJA ---
      meshes.forEach((mesh, i) => {
        const initialX = i * itemTotalWidth;
        const currentX = initialX + scrollPos;

        // Modulo matematika koja drži sve slike unutar vidnog polja
        const wrappedX =
          ((((currentX + totalTrackWidth / 2) % totalTrackWidth) +
            totalTrackWidth) %
            totalTrackWidth) -
          totalTrackWidth / 2;

        mesh.position.x = wrappedX;

        // Glatko opuštanje deformacije kada kretanje uspori
        mesh.material.uniforms.uBend.value = THREE.MathUtils.lerp(
          mesh.material.uniforms.uBend.value,
          bendTarget,
          0.12,
        );
      });

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("wheel", handleWheel);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("resize", handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      renderer.dispose();
    };
  }, [images]);

  return <div ref={containerRef} className="curved-gallery-canvas" />;
};

export default CurvedGallery;
