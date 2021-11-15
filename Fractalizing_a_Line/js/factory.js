var camera, renderer, controls;
class factory {
    constructor(pox, poy, poz, len) {
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(pox, poy, poz).setLength(len);
        this.render();
        this.controls();
    }
    render() {
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera);
        document.body.appendChild(renderer.domElement);
    }
    controls() {
        controls = new THREE.OrbitControls(camera, renderer.domElement)
    }
    renderScene() {
        renderer.render(scene, camera);
    }

}
